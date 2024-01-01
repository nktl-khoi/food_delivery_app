import {gql} from '@apollo/client';

export const GET_USER_NOTIFICATION = gql`
  query GetAllNotificationOfUser($userId: ID!, $status: NotiStatus!) {
    getAllNotificationOfUser(userId: $userId, status: $status) {
      id
      title
      message
      updatedAt
      status
    }
  }
`;

export const GET_SHOP_NOTIFICATION = gql`
  query GetAllNotificationOfShop($shopId: ID!, $status: NotiStatus!) {
    getAllNotificationOfShop(shopId: $shopId, status: $status) {
      id
      title
      message
      updatedAt
      status
    }
  }
`;

export const GET_ADMIN_NOTIFICATION = gql`
  query GetAllNotificationOfAdmin($status: NotiStatus!) {
    getAllNotificationOfAdmin(status: $status) {
      id
      title
      message
      updatedAt
      status
    }
  }
`;

export const CHANGE_NOTIFY_STATUS = gql`
  mutation ChangeNotifyStatus($notifyId: ID!, $status: NotiStatus) {
    changeNotifyStatus(id: $notifyId, status: $status)
  }
`;
