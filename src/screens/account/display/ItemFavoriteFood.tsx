import {OnPressItem} from '../../../types/GenericType';
import {FoodListItemType} from '../../../types/ItemType';

import FavoriteButton from '../../../components/buttons/FavoriteButton';
import GenericItemFoodVertical from '../../../components/items/generics/GenericItemFoodVertical';

type ThisProps = FoodListItemType & {
  onPressFavoriteButton: OnPressItem;
};

export default function ItemFavoriteFood(props: ThisProps): JSX.Element {
  return (
    <GenericItemFoodVertical
      imageUri={props.imageUri}
      foodName={props.foodName}
      vendorName={props.foodName}
      priceValue={props.priceValue}
      onPressItem={props.onPressItem}
      onPressFavoriteButton={props.onPressFavoriteButton}
      id={props.id}
      rating={props.rating}
      isFavorite={true}
    />
  );
}
