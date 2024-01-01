import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {ItemHistoryOrderType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemHistoryOrder from './ItemHistoryOrder';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function HistoryOrderList(props: ThisProps): JSX.Element {
  const navigateToFoodDetailsScreen = (item: ItemHistoryOrderType) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodName: item.foodName,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: ItemHistoryOrderType}) => (
      <ItemHistoryOrder
        onPressItem={() => navigateToFoodDetailsScreen(item)}
        id={item.id}
        foodName={item.foodName}
        date={item.date}
        priceValue={item.priceValue}
        imageUri={item.imageUri}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
