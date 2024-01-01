import {gql} from '@apollo/client';

export const GET_SHOP_INFO_BY_FIREBASE_UID = gql`
  query GetShopInfoByFirebaseUID($firebaseUID: ID!) {
    getShopInfoByFirebaseUID(id: $firebaseUID) {
      id
      shopPhoneNumber
      shopName
      shopAddress
      imageUri
      userId
      user {
        loginAs
        name
        account {
          email
          role
        }
      }
    }
  }
`;
