import {gql} from '@apollo/client';

export const GET_ON_GOING_ORDER_OF_SHOP = gql`
  query GetOnGoingOrdersOfShop($shopId: ID!) {
    getOnGoingOrdersOfShop(shopId: $shopId) {
      id
      productSize {
        title
        product {
          title
          imageUri
        }
      }
      orderIngredientDetail {
        productIngredient {
          id
          name
          imageUri
          price
        }
      }
      status
      count
    }
  }
`;

export const GET_COMPLETE_ORDER_OF_SHOP = gql`
  query GetCompleteOrdersOfShop($shopId: ID!) {
    getCompleteOrdersOfShop(shopId: $shopId) {
      id
      productSize {
        title
        fullPrice
        product {
          title
          imageUri
        }
      }
      orderIngredientDetail {
        productIngredient {
          id
          name
          imageUri
          price
        }
      }
      createdAt
      status
      count
    }
  }
`;
