import {gql} from '@apollo/client';

export const CREATE_SUB_CATEGORY = gql`
  mutation CreateProductSubCategory(
    $subcategory: createProductSubCategoryInput!
  ) {
    createProductSubCategory(subcategory: $subcategory)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($productInput: createProductInput!) {
    createProduct(productInput: $productInput)
  }
`;

export const GET_ALL_SUB_CATEGORY_TAG_OF_SHOP = gql`
  query GetAllSubCategoryOfShop($id: ID!) {
    getAllSubCategoryOfShop(id: $id) {
      id
      title
    }
  }
`;
