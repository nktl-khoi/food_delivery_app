import {gql} from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      imageUrl
      name
      phoneNumber
      account {
        id
        email
        createdAt
      }
    }
  }
`;

export const GET_ALL_SHOPS = gql`
  query GetAllShop {
    getAllShop {
      imageUri
      shopName
      shopPhoneNumber
      user {
        account {
          id
          createdAt
          email
        }
      }
    }
  }
`;

export const GET_ACCOUNT_BY_ID = gql`
  query GetAccountById($id: ID!) {
    getAccountById(id: $id) {
      id
      email
      createdAt
      status
      user {
        id
        name
        phoneNumber
        imageUrl
        defaultAddress
        shop {
          id
          imageUri
          shopAddress
          shopName
          shopPhoneNumber
        }
      }
    }
  }
`;

export const GET_LIST_REPORTED_ACCOUNT = gql`
  query GetListReportedAccount($id: String!) {
    getListReportedAccount(accountId: $id) {
      id
      title
      message
      createdAt
      updatedAt
      reportAccount {
        mark
      }
    }
  }
`;

export const GET_LIST_ACCOUNT_REPORT = gql`
  query GetListAccountReport($id: String!) {
    getListAccountReport(accountId: $id) {
      id
      title
      message
      createdAt
      updatedAt
      reportAccount {
        mark
      }
    }
  }
`;

export const GET_REPORT_DETAILS = gql`
  query GetReportDetails($id: String!) {
    getReportDetails(id: $id) {
      id
      title
      message
      createdAt
      updatedAt

      reporter {
        id
        user {
          imageUrl
          name
          phoneNumber
          defaultAddress
          shop {
            imageUri
            shopName
            shopPhoneNumber
            shopAddress
          }
        }
        email
      }

      reportAccount {
        id
        mark
        accountReported {
          id
          user {
            imageUrl
            name
            phoneNumber
            defaultAddress
            shop {
              imageUri
              shopName
              shopPhoneNumber
              shopAddress
            }
          }
          email
        }
      }
    }
  }
`;

export const CHANGE_ACCOUNT_STATUS = gql`
  mutation ChangeStatusAccount($accountId: ID!, $status: AccountStatus!) {
    changeStatusAccount(accountId: $accountId, status: $status)
  }
`;
