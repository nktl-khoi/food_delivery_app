import {OrderStatus} from './constants';

export type ItemOrderSizeType = {
  id: string;
  size: string;
  quantity: number;
  price: number;
};

export type ItemCartType = {
  id: string;
  imageUri: string;
  foodName: string;
  size: string;
  priceValue: number;
  amount: number;
};

export type ItemOrderType = {
  id: string;
  imageUri: string;
  foodName: string;
  size: string;
  priceValue: number;
  amount: number;
};

export type ItemOngoingType = {
  id: string;
  imageUri: string;
  foodName: string;
  size: string;
  amount: number;
  status: OrderStatus;
};

export type ItemHistoryOrderType = {
  id: string;
  imageUri: string;
  foodName: string;
  date: string;
  status: OrderStatus;
  priceValue: number;
};

export type FoodListItemType = {
  id: string;
  imageUri: string;
  title: string;
  fullPrice: number;
  description: string;
  shopName: any;
};

export type ItemFoodTagName = {
  id: string;
  title: string;
};

export type ItemFoodSizeName = {
  id: string;
  title: string;
  fullPrice: number;
};

export type CreateShopInputType = {
  shopAddress: string;
  shopPhoneNumber: string;
  shopName: string;
  imageUri: string;
  userId: string;
};

export type UpdateShopInputType = {
  shopAddress: string;
  shopPhoneNumber: string;
  shopName: string;
  imagePublicId: string;
  shopId: string;
};

export type OrderProductInputType = {
  fullPrice: number;
  count: number;
  deliveryAddress: string;
  totalCost: number;
  commentary: string;
  deliveredAt: string;
  userId: string;
  productSizeId: string;
};

export type CreateProductInputType = {
  subcategoryId: string;
  imagePublicId: string;
  title: string;
  price: number;
  sizeTitle: string;
  description: string;
};

export type UpdateProductInputType = {
  subcategoryId: string;
  imagePublicId: string;
  title: string;
  description: string;
  productId: string;
};

export type CreateProductSubCategoryInputType = {
  shopId: string;
  title: string;
  description: string;
};

export type CreateTagInputType = {
  title: string;
  productId: string;
};

export type CreateSizeInputType = {
  title: string;
  productId: string;
  fullPrice: number;
};

export type CreateRatingProductInputType = {
  score: number;
  comment: string;
  userId: string;
  productId: string;
};

export type CreateFavouriteInputType = {
  userId: string;
  productId: string;
};

export type RemoveFromFavouriteInputType = {
  userId: string;
  productId: string;
};

export type CreateReportInputType = {
  accountReportedId: string;
  title: string;
  message: string;
  reporterId: string;
};
