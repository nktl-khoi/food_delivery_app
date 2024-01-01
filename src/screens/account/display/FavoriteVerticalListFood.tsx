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
  userId: string;
  refetch: any;
};

export default function FavoriteVerticalListFood(
  props: ThisProps,
): JSX.Element {
  const navigateToFoodDetailsScreen = (item: FoodListItemType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodId: item.id,
    });
  };

  const removeFromFavorite = (item: FoodListItemType) => {
    // show dialog first
    console.log(item);
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemFavoriteFood
        id={item.id}
        imageUri={item.imageUri}
        title={item.title}
        fullPrice={item.fullPrice}
        description={item.description}
        shopName={item.productSubcategory.productCategory.shop.shopName}
        userId={props.userId}
        refetch={props.refetch}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
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
