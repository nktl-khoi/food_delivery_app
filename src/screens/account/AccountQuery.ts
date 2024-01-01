import {gql} from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      imageUrl
      name
      phoneNumber
      defaultAddress
      account {
        email
        role
      }
    }
  }
`;

export const GET_USER_BY_FIREBASE_UID = gql`
  query GetUserByFirebaseUID($id: ID!) {
    getUserByFirebaseUID(id: $id) {
      id
      name
      imageUrl
      defaultAddress
      phoneNumber
      loginAs
      account {
        id
        role
        status
        email
      }
    }
  }
`;

export const GET_FAVOURITE_OF_USER = gql`
  query Query($userId: ID!) {
    getFavouriteProductsOfUser(userId: $userId) {
      id
      title
      fullPrice
      imageUri
      description
      productSubcategory {
        productCategory {
          shop {
            shopName
          }
        }
      }
    }
  }
`;

export const GET_LIMIT_FAVOURITE_OF_USER = gql`
  query GetLimitFavouriteProductsOfUser($userId: ID!, $takeNum: Float) {
    getLimitFavouriteProductsOfUser(userId: $userId, takeNum: $takeNum) {
      id
      title
      fullPrice
      imageUri
      productSubcategory {
        productCategory {
          shop {
            shopName
          }
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $userId: String!
    $name: String
    $phone: String
    $address: String
    $publicId: String
  ) {
    updateUser(
      userId: $userId
      name: $name
      phone: $phone
      address: $address
      publicId: $publicId
    )
  }
`;

export const CREATE_SHOP_ACCOUNT = gql`
  mutation CreateShopAccount($shop: createShopAccountInput!) {
    createShopAccount(shop: $shop)
  }
`;

export const UPDATE_SHOP_ACCOUNT = gql`
  mutation UpdateShopAccount($shop: updateShopAccountInput) {
    updateShopAccount(shop: $shop)
  }
`;

export const UPDATE_LOGIN_ROLE = gql`
  mutation UpdateLoginRole($userId: String!, $role: Role) {
    updateLoginRole(userId: $userId, role: $role)
  }
`;

export const UPDATE_USER_LOGIN_ROLE = gql`
  mutation UpdateLoginRole($userId: String!, $role: Role) {
    updateLoginRole(userId: $userId, role: $role)
  }
`;

export const ADD_TO_FAVOURITE = gql`
  mutation AddToFavourite($favouriteInput: createFavouriteInput!) {
    addToFavourite(favouriteInput: $favouriteInput)
  }
`;

export const REMOVE_FROM_FAVOURITE = gql`
  mutation RemoveFromFavourite($favouriteInput: removeFromFavouriteInput!) {
    removeFromFavourite(favouriteInput: $favouriteInput)
  }
`;

export const CHECK_FAVOURITE = gql`
  query Query($favouriteInput: createFavouriteInput!) {
    checkFavouriteInput(favouriteInput: $favouriteInput)
  }
`;
