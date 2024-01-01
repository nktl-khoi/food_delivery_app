import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {FoodListItemType} from '../../../types/ItemType';
import ItemFavoriteFood from './ItemFavoriteFood';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {ItemComponent} from '../../../types/GenericType';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  listHeaderComponent?: ItemComponent | any;
};

export default function FavoriteVerticalListFood(
  props: ThisProps,
): JSX.Element {
  const navigateToFoodDetailsScreen = (item: FoodListItemType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      id: item.id,
      foodName: item.foodName,
    });
  };

  const removeFromFavorite = (item: FoodListItemType) => {
    // show dialog first
    console.log(item);
  };

  const memorizedValue = useCallback(
    ({item}: {item: FoodListItemType}) => (
      <ItemFavoriteFood
        imageUri={''}
        foodName={item.foodName}
        vendorName={item.vendorName}
        priceValue={item.priceValue}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        onPressFavoriteButton={() => removeFromFavorite(item)}
        id={item.id}
        rating={item.rating}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      ListHeaderComponent={props.listHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
