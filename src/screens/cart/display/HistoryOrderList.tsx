import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemHistoryOrder from './ItemHistoryOrder';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function HistoryOrderList(props: ThisProps): JSX.Element {
  const navigateToOrderDetailScreen = (item: any) => {
    props.navigation.navigate('OrderDetailsScreen', {
      orderId: item.id,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemHistoryOrder
        onPressItem={() => navigateToOrderDetailScreen(item)}
        status={item.status}
        id={item.id}
        foodName={item.productSize.product.title}
        date={item.createdAt}
        priceValue={item.productSize.fullPrice}
        imageUri={item.productSize.product.imageUri}
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
