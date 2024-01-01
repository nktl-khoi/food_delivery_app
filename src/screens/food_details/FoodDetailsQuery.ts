import {gql} from '@apollo/client';

export const GET_FOOD_BY_ID = gql`
  query GetProductById($getProductById: ID!) {
    getProductById(id: $getProductById) {
      id
      imageUri
      fullPrice
      ProductTag {
        id
        title
      }
      ProductSize {
        id
        title
        fullPrice
      }
      RatingProduct {
        score
      }
      title
      description
      averageRatingScores
      productSubcategory {
        productCategory {
          shop {
            id
            shopName
          }
        }
      }
    }
  }
`;

export const ADD_PRODUCT_TO_CART = gql`
  mutation Mutation(
    $productSizeId: ID!
    $userId: ID!
    $amount: Int
    $fullPrice: Float
  ) {
    addProductToCart(
      productSizeId: $productSizeId
      userId: $userId
      amount: $amount
      fullPrice: $fullPrice
    )
  }
`;

export const CREATE_RATING_PRODUCT = gql`
  mutation Mutation($ratingInput: createRatingProductInput!) {
    createRatingProduct(ratingInput: $ratingInput)
  }
`;

export const GET_RATINGS_OF_A_PRODUCT = gql`
  query GetAllRatingOfProduct($productId: ID!) {
    getAllRatingOfProduct(productId: $productId) {
      user {
        name
        imageUrl
      }
      shop {
        shopName
        imageUri
      }
      createdAt
      updatedAt
      comment
      score
    }
  }
`;

export const GET_AVG_SCORE_OF_PRODUCT = gql`
  query Query($productId: ID!) {
    getAverageScore(productId: $productId) {
      avgRating
      countRating
    }
  }
`;
