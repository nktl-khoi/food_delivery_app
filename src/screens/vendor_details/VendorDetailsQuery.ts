import {gql} from '@apollo/client';

export const GET_SHOP_BY_ID = gql`
  query GetShopById($getShopById: ID!) {
    getShopById(id: $getShopById) {
      id
      shopName
      shopAddress
      shopPhoneNumber
      imageUri
      user {
        account {
          id
        }
      }
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
      id
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

export const CREATE_REPORT_ACCOUNT = gql`
  mutation CreateReport($reportInput: createReportInput!) {
    createReport(reportInput: $reportInput)
  }
`;
