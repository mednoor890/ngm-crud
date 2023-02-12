export {}

import React, { useEffect, useState } from "react"
import {  useMutation ,useQuery} from '@apollo/client';
import FileBase from 'react-file-base64'
//import { FileBaseResult } from 'react-file-base64'
import Input from "./Input"
import Button from "../Cards/Button";
import { ADD_PRODUCT } from "../../graphql/MutationProducts";
import { GET_PRODUCTS } from "../../graphql/getProduct";

interface FormData 
{   id:string,
    name: string,
    price: string  ,
    description: string,
    image: string
}

const Form:React.FC=() => {
const  [FormData, setFormData] = useState<FormData>(
    {    id: "",
        name:"" ,
        price:"",
        description:"" ,
        image:"" 
    }
);
const [AddProduct, { data }] = useMutation(ADD_PRODUCT);
const { refetch } = useQuery(GET_PRODUCTS);


const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value} =e.target
     setFormData({...FormData, [name]:value})
}
const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    AddProduct({ variables: { ...FormData } })
    .then(({ data }) => {
        console.log('Product added:', data.AddProduct);
        refetch()
      })
}
return (
    <>
    <form onSubmit={handleSubmit}>
        <Input type="number" label="id" name="id" onChange={handleInputChange} value={FormData.id} />
        <Input type="text" label="name" name="name" onChange={handleInputChange} value={FormData.name}/>
        <Input type="number"  label="price" name="price" onChange={handleInputChange} value={FormData.price}/>
        <Input type="text"  label="description" name="description" onChange={handleInputChange} value={FormData.description}/>
         <FileBase value={FormData.image} placeholder="enter an image for your product" type="file" multiple={false} onDone={(result: FileBaseResult) =>
            setFormData({ ...FormData, image: result.base64 })
          }
  />
        <Button type="submit" name= "Add" onClick={handleSubmit}/>

    </form>
    </>
)
}
export default  Form