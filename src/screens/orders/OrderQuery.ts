import {gql} from '@apollo/client';

export const CREATE_ORDER_PRODUCT = gql`
  mutation CreateOrderProduct($orderProducts: [orderProductInput!]!) {
    createOrderProduct(orderProducts: $orderProducts)
  }
`;

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($orderId: ID!) {
    getOrderById(id: $orderId) {
      id
      commentary
      totalCost
      count
      deliveredAt
      deliveryAddress
      productSize {
        title
        fullPrice
        product {
          id
          imageUri
          title
          productSubcategory {
            productCategory {
              shop {
                shopName
                shopPhoneNumber
                imageUri
              }
            }
          }
        }
      }
      orderIngredientDetail {
        productIngredient {
          id
          name
          price
          imageUri
        }
      }
      fullPrice
      status
      createdAt
      updatedAt
      user {
        name
        imageUrl
        loginAs
        account {
          id
          email
        }
        phoneNumber
      }
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation CancelOrder($orderId: ID!) {
    cancelOrder(orderId: $orderId)
  }
`;

export const CHANGE_ORDER_STATUS = gql`
  mutation ChangeOrderStatus($orderId: ID!, $status: OrderStatus!) {
    changeOrderStatus(orderId: $orderId, status: $status)
  }
`;
