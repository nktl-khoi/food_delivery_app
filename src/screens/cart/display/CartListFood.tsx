import {StyleSheet, View} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import ItemCart from './ItemCart';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {TotalPriceAndPlaceOrder} from './TotalPriceAndPlaceOrderDisplay';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import DeleteAllCartDialog from './DeleteAllCartDialog';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  refetch: any;
  userId: string;
};

export default function CartListFood(props: ThisProps): JSX.Element {
  const [price, setPrice] = useState(0);

  const navigateToFoodDetailsScreen = (item: any) => {
    props.navigation.navigate('FoodDetailsScreen', {
      foodId: item.productSize.product.id,
    });
  };

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < props.data.length; i++) {
      sum = sum + props.data[i].fullPrice;
    }
    console.log(sum);
    setPrice(sum);
  }, [props.data]);

  const onPressPlaceOrder = () => {
    props.navigation.navigate('MyOrderScreen', {
      listData: props.data,
      totalCost: price,
      userId: props.userId,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => {
      return (
        <ItemCart
          refetch={props.refetch}
          onPressItem={() => navigateToFoodDetailsScreen(item)}
          foodName={item.productSize.product.title}
          size={item.productSize.title}
          sizeId={item.productSize.id}
          priceValue={item.productSize.fullPrice}
          amount={item.amount}
          id={item.id}
          imageUri={item.productSize.product.imageUri}
        />
      );
    },
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View style={styles.header}>
          <ItemTitleText>All products</ItemTitleText>
          <DeleteAllCartDialog userId={props.userId} refetch={props.refetch} />
        </View>
      }
      ListFooterComponent={
        <TotalPriceAndPlaceOrder
          price={price}
          onPressPlaceOrder={onPressPlaceOrder}
          loading={false}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
