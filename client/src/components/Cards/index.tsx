import { useQuery,useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_PRODUCTS } from '../../graphql/getProduct';
import { ADD_PRODUCT } from '../../graphql/MutationProducts';
import Form from '../Form';
import Button from './Button';
import Card from './Card';
import { Container } from './styles/cards';

const Cards:React.FC=()=>
{       const [hide, setHide] = useState(false);
        const [productData, setProductData] = useState({
            id: "",
            name: "",
            description: "",
            price: "",
            image: ""
                                              });

    const {loading,error,data,refetch}=useQuery(GET_PRODUCTS)
    const [AddProduct,{ data: mutationData }]=useMutation(ADD_PRODUCT)
    const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();
      AddProduct({ variables: { ...productData } })
      .then(({ data }) => {
          console.log('Product added:', data.AddProduct);
          refetch()
          
        })
  }
    useEffect(() => {
        if (mutationData) {
          refetch()
        }
      }, [mutationData, refetch])
    if (loading) return <p>LOADING...</p>
    if (error) return <p>ERROR:{error.message}</p>

    return (
        <>
         <Button  type="submit" mode= "Add" onClick={() => setHide(!hide)}/>
         {hide &&( <Form mode='Add' handleSubmit={handleSubmit} productData={productData} closeModal={() => setHide(false)} />)}
        <Container>
        {data.getAllProducts.map((product: { id: string; name: string; description: string; price: string; image: string; })=>(
            <Card 
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}/>
        ))}
        </Container>
        </>
    )
}
export default Cards