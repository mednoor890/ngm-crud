export {}

import React, { useState } from "react"
import { gql, useMutation } from '@apollo/client';

import Input from "./Input"

interface FormData 
{   id:string,
    name: string,
    price: string  ,
    description: string,
    image: string
}
const ADD_PRODUCT = gql`
mutation createProduct($id: String!, $name: String!, $description: String!, $price: String! ,$image:String) {
    createProduct(input: {id: $id, name: $name, description: $description, price: $price,image:$image}) {
     id
     name
     description
     price
     image
   }
  
 }
`
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

const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value} =e.target
     setFormData({...FormData, [name]:value})
}
const handleSubmit = (e:React.FormEvent)=>{
    e.preventDefault();
    AddProduct({ variables: { ...FormData } });

}
return (
    <>
    <form onSubmit={handleSubmit}>
        <Input type="number" label="id" name="id" onChange={handleInputChange} value={FormData.id} />
        <Input type="text" label="name" name="name" onChange={handleInputChange} value={FormData.name}/>
        <Input type="number"  label="price" name="price" onChange={handleInputChange} value={FormData.price}/>
        <Input type="text"  label="description" name="description" onChange={handleInputChange} value={FormData.description}/>
        <Input type="file"  label="image" name="image" onChange={handleInputChange} value={FormData.image}/>
        <button type="submit">Submit</button>

    </form>
    </>
)
}
export default  Form