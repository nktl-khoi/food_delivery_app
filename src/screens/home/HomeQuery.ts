import {gql} from '@apollo/client';

export const GET_ALL_PRODUCT = gql`
  query GetAllProducts {
    getAllProducts {
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

export const GET_RECENT_PRODUCT = gql`
  query GetRecentProducts {
    getRecentProducts {
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

export const GET_POPULAR_PRODUCT = gql`
  query GetPopularProducts {
    getPopularProducts {
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
