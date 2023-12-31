import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {FoodListItemType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemFoodHorizontal from '../../../components/items/ItemFoodHorizontal';
import {ComponentStyle} from '../../../types/GenericType';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  listHeaderComponent?: ComponentStyle;
};

export default function GridFoodInShopDisplay(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: FoodListItemType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      id: item.id,
      foodName: item.foodName,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: FoodListItemType}) => (
      <ItemFoodHorizontal
        imageUri={''}
        foodName={item.foodName}
        vendorName={item.vendorName}
        priceValue={item.priceValue}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        rating={item.rating}
        onPressAddButton={() => navigateToFoodDetailsScreen(item)}
        id={item.id}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      numColumns={2}
      columnWrapperStyle={styles.column}
      ListHeaderComponent={props.listHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  column: {gap: 12},
});
