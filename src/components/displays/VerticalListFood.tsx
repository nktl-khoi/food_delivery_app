import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from './generics/GenericFlatList';
import ItemFoodVertical from '../items/ItemFoodVertical';
import {ComponentStyle, ItemComponent} from '../../types/GenericType';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  listHeaderComponent?: ItemComponent | any;
  listFooterComponent?: ItemComponent | any;
  contentContainerStyle?: ComponentStyle;
  renderItem?: any;
};

export default function VerticalListFood(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: any) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodId: item.id,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemFoodVertical
        key={item.id}
        imageUri={item.imageUri}
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        id={item.id}
        title={item.title}
        fullPrice={item.fullPrice}
        description={item.description}
        shopName={item.productSubcategory?.productCategory?.shop?.shopName}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={props.renderItem ? props.renderItem : memorizedValue}
      contentContainerStyle={[styles.container, props.contentContainerStyle]}
      ListHeaderComponent={props.listHeaderComponent}
      ListFooterComponent={props.listFooterComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
