import {gql} from '@apollo/client';

export const CREATE_ORDER_PRODUCT = gql`
  mutation Mutation(
    $order: orderInput!
    $orderProducts: [orderProductInput!]!
  ) {
    createOrderProduct(order: $order, orderProducts: $orderProducts)
  }
`;
