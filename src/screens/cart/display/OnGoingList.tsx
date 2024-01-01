import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemOnGoing from './ItemOnGoing';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function OnGoingList(props: ThisProps): JSX.Element {
  const navigateToOrderDetailScreen = (item: any) => {
    props.navigation.navigate('OrderDetailsScreen', {
      orderId: item.id,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemOnGoing
        onPressItem={() => navigateToOrderDetailScreen(item)}
        foodName={item.productSize.product.title}
        size={item.productSize.title}
        amount={item.count}
        id={item.id}
        status={item.status}
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
