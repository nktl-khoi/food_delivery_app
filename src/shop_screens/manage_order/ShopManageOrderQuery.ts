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
      createdAt
      status
      count
    }
  }
`;
