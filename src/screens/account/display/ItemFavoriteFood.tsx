import {OnPressItem} from '../../../types/GenericType';
import {FoodListItemType} from '../../../types/ItemType';

import GenericItemFoodVertical from '../../../components/items/generics/GenericItemFoodVertical';
import FavouriteButton from '../../../components/buttons/generics/FavouriteButton';

type ThisProps = FoodListItemType & {
  onPressItem: OnPressItem;
  userId: string;
  refetch: any;
};

export default function ItemFavoriteFood(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodVertical
      imageUri={props.imageUri}
      title={props.title}
      shopName={props.shopName}
      description={props.description}
      fullPrice={props.fullPrice}
      onPressItem={props.onPressItem}
      isFavorite={true}
      id={props.id}
      favouriteComponent={
        <FavouriteButton
          refetch={props.refetch}
          userId={props.userId}
          productId={props.id}
        />
      }
    />
  );
}
