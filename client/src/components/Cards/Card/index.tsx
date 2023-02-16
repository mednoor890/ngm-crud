import React, { useEffect, useState } from 'react';
import { Image,CardContainer, Description, Name, Price } from './styles/card';
import  Button  from '../Button';
import { useMutation,useQuery } from '@apollo/client';
import { DELETE_PRODUCT, UPDATE_PRODUCT } from '../../../graphql/MutationProducts';
//import Form from '../../Form';
import { GET_PRODUCTS } from '../../../graphql/getProduct';
import FormU from '../../FormU';



interface CardProps {
    id: string,
    name: string,
    description: string,
    price: string,
    image: string,
}
const Card: React.FC<CardProps> = ({ id, name, description, price, image }) => {
    const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT);
    
    const [showForm, setShowForm] = useState(false);
   const {data,refetch}=useQuery(GET_PRODUCTS)
   const handleDelete=() => {
   deleteProduct({variables: { id }})
   .then(({ data }) => {
    console.log('Product deleted:', data.deleteProduct);
    refetch()
  })

   }

    return (
        <CardContainer>
            
                <Image src={image} alt={name} />
                
            
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Price>{price} dt</Price>
           
            <Button onClick={handleDelete} mode="Delete"/>
            <Button mode="Update"   onClick={() => setShowForm(!showForm)} />
            {showForm &&( <FormU product={{ id, name, description, price, image }} closeModal={() => setShowForm(false)} />)}
            
        </CardContainer>
    )
}
export default Card