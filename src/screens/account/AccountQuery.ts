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
      account {
        role
        email
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
