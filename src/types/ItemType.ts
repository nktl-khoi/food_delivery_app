import {OnPressItem} from './GenericType';

export type ItemOrderSizeType = {
  id: string;
  size: string;
  quantity: number;
  price: number;
};

export type ItemCartType = {
  id: string;
  onPressItem: OnPressItem;
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
  status: string;
};

export type ItemHistoryOrderType = {
  id: string;
  onPressItem: OnPressItem;
  imageUri: string;
  foodName: string;
  date: string;
  priceValue: number;
};

export type FoodListItemType = {
  id: string;
  imageUri: string;
  title: string;
  fullPrice: number;
  description: string;
  averageRatingScores: number;
  shopName: any;
  onPressItem: OnPressItem;
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

export type OrderInputType = {
  deliveryAddress: string;
  totalCost: number;
  deliveredAt: string;
  userId: string;
  commentary: string;
};

export type OrderProductInputType = {
  fullPrice: number;
  count: number;
  productSizeId: string;
};
