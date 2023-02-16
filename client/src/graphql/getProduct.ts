import { gql } from '@apollo/client';

export const GET_PRODUCTS=gql`
query{
    getAllProducts {
        id,
        name,
        description,
        price,
        image
    }
}
`
export const GET_PRODUCT=`
query getProduct ($id:string!){
     getProduct(id:$id){
      name,
      description,
      price
    }
  }
`