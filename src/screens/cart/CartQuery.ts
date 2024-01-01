import {gql} from '@apollo/client';

export const GET_ALL_CART_PRODUCT_OF_USER = gql`
  query GetAllCartProductOfUser($userId: ID!) {
    getAllCartProductOfUser(userId: $userId) {
      id
      fullPrice
      productSize {
        id
        title
        fullPrice
        product {
          title
          imageUri
        }
      }
      amount
    }
  }
`;

export const DELETE_A_CART_PRODUCT = gql`
  mutation DeleteCartProduct($cartProductId: ID!) {
    deleteCartProduct(cartProductId: $cartProductId)
  }
`;

export const DELETE_ALL_CART_OF_USER = gql`
  mutation DeleteAllCartProductsOfUser($userId: ID!) {
    deleteAllCartProductsOfUser(userId: $userId)
  }
`;

export const UPDATE_CART_PRODUCT = gql`
  mutation UpdateCartProduct(
    $cartProductId: ID!
    $productSizeId: ID!
    $amount: Int
    $fullPrice: Float
  ) {
    updateCartProduct(
      cartProductId: $cartProductId
      productSizeId: $productSizeId
      amount: $amount
      fullPrice: $fullPrice
    )
  }
`;
