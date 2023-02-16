import { gql, useMutation } from '@apollo/client';

export const ADD_PRODUCT = gql`
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
export const DELETE_PRODUCT= gql `
mutation deleProduct($id:String!)
{
    deleteProduct(id: $id)
    {
        id,
        name,
        description,
        price,
        image
    }
}
`
export const UPDATE_PRODUCT=gql`
mutation updateProduct($id:String!,$name: String!, $description: String!, $price: String! ,$image:String){
  updateProduct(id:$id,input: {id: $id, name: $name, description: $description, price: $price,image:$image})
  {
    id,
    name,
    description,
    price,
    image
  }  
}
`