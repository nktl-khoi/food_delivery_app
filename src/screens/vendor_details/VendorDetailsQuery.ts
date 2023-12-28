import {gql} from '@apollo/client';

export const GET_SHOP_BY_ID = gql`
  query GetShopById($getShopById: ID!) {
    getShopById(id: $getShopById) {
      id
      shopName
      shopAddress
      shopPhoneNumber
      imageUri
    }
  }
`;

export const GET_ALL_PRODUCT_OF_SHOP = gql`
  query GetAllProductOfShop($getAllProductOfShopId: ID!) {
    getAllProductOfShop(id: $getAllProductOfShopId) {
      id
      title
      imageUri
      fullPrice
      description
      averageRatingScores
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

export const GET_ALL_SUBCATEGORY_OF_SHOP = gql`
  query GetAllSubCategoryOfShop($getAllSubCategoryOfShopId: ID!) {
    getAllSubCategoryOfShop(id: $getAllSubCategoryOfShopId) {
      title
      products {
        id
        imageUri
        title
        fullPrice
        description
        averageRatingScores
      }
    }
  }
`;
