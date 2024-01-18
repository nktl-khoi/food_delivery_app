import {gql} from '@apollo/client';

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId)
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation CreateProductSize($productInput: updateProductInput!) {
    updateProduct(productInput: $productInput)
  }
`;

export const UPDATE_PRODUCT_WITH_IMAGE = gql`
  mutation UpdateProductWithImage($productInput: updateProductWithImageInput!) {
    updateProductWithImage(productInput: $productInput)
  }
`;

export const CREATE_TAG = gql`
  mutation CreateTag($tagInput: createTagInput!) {
    createTag(tagInput: $tagInput)
  }
`;

export const CREATE_SIZE = gql`
  mutation CreateProductSize($sizeInput: createSizeInput!) {
    createProductSize(sizeInput: $sizeInput)
  }
`;

export const ADD_PRODUCT_INGREDIENTS = gql`
  mutation AddProductIngredients(
    $productIngredientsInput: addProductIngredientsInput!
  ) {
    addProductIngredients(productIngredientsInput: $productIngredientsInput)
  }
`;

export const UPDATE_PRODUCT_INGREDIENTS = gql`
  mutation UpdateProductIngredients(
    $productIngredientsInput: updateProductIngredientsInput!
  ) {
    updateProductIngredients(productIngredientsInput: $productIngredientsInput)
  }
`;
