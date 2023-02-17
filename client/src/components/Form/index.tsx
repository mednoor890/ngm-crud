

import React, { useEffect, useState } from "react"
import {  useMutation ,useQuery} from '@apollo/client';
import FileBase from 'react-file-base64'
//import { FileBaseResult } from 'react-file-base64'
import Input from "./Input"
import Button from "../Cards/Button";
import { ADD_PRODUCT, UPDATE_PRODUCT } from "../../graphql/MutationProducts";
import { GET_PRODUCTS } from "../../graphql/getProduct";
import { CloseButton, ModalForm, ModalWindow, Overlay } from "./styles/Form";

interface FormData 
{   id:string,
    name: string,
    price: string  ,
    description: string,
    image: string
}
interface Props {
    productData: {
        id: string,
        name: string,
        description: string,
        price: string,
        image: string,
      },
    closeModal:()=>void;
    handleSubmit:(e:React.FormEvent)=>void;
    mode: "Add" | "Update";
   
}
const Form:React.FC<Props>=({closeModal,mode,productData}) => {
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
const [updateProduct, { data: updateData }] = useMutation(UPDATE_PRODUCT);
const [showAddButton, setShowAddButton] = useState(mode==="Add");


const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value} =e.target
     setFormData({...FormData, [name]:value})
}


const handleUpdate=(e:React.FormEvent)=>{
    e.preventDefault();
    updateProduct({variables: {...FormData}})
    .then(({ data })=>
    {
    console.log('Product updated:', data.updateProduct)
    refetch()
    //setShowForm(false)
    })
    .catch(error => {
      console.error(error);
    });
   
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        AddProduct({ variables: { ...FormData } })
          .then(({ data }) => {
            console.log("Product added:", data.addProduct);
            refetch();
            closeModal();
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
return (
    <>
        <Overlay>
        <ModalWindow>
        <CloseButton onClick={closeModal}>X</CloseButton>

    <ModalForm onSubmit={handleSubmit}>
    

        <Input type="number" label="id" name="id" onChange={handleInputChange} value={FormData.id} />
        <Input type="text" label="name" name="name" onChange={handleInputChange} value={FormData.name}/>
        <Input type="number"  label="price" name="price" onChange={handleInputChange} value={FormData.price}/>
        <Input type="text"  label="description" name="description" onChange={handleInputChange} value={FormData.description}/>
        <FileBase value={FormData.image} placeholder="enter an image for your product" type="file" multiple={false} onDone={(result: FileBaseResult) =>
            setFormData({ ...FormData, image: result.base64 })
          }
  /> 
 <Button mode="Add" onClick={handleSubmit}/> 
  
    </ModalForm>
    </ModalWindow>
    </Overlay>
    </>
)
}
export default  Form