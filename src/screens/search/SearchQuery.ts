import {gql} from '@apollo/client';

export const GET_ALL_TAGS = gql`
  query Query {
    getAllTags {
      title
    }
  }
`;

export const SEARCH_PRODUCT = gql`
  query SearchProduct($text: String) {
    searchProduct(text: $text) {
      id
      imageUri
      title
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

// export const FILTER_PRODUCT = gql``;
