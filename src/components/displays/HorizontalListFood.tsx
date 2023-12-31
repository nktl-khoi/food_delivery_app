import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import ItemFoodHorizontal from '../items/ItemFoodHorizontal';
import GenericFlatList from './generics/GenericFlatList';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function HorizontalListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: any) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodId: item.id,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemFoodHorizontal
        imageUri={item.imageUri}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        id={item.id}
        title={item.title}
        fullPrice={item.fullPrice}
        description={item.description}
        averageRatingScores={item.averageRatingScores}
        shopName={item.productSubcategory?.productCategory?.shop?.shopName}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      horizontal
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
});
