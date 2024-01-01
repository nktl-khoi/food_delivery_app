import {StyleSheet} from 'react-native';
import {useCallback, useState} from 'react';
import GenericFlatList from '../../components/displays/generics/GenericFlatList';
import ItemOrder from './display/ItemOrder';
import {ListHeaderOrder} from './display/ListHeaderOrder';
import {ListFooterOrder} from './display/ListFooterOrder';
import {OrderProductInputType} from '../../types/ItemType';
import {useMutation} from '@apollo/client';
import {CREATE_ORDER_PRODUCT} from './OrderQuery';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function MyOrderScreen(props: ThisProps): JSX.Element {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [commentary, setCommentary] = useState('');
  const {listData, totalCost, userId} = props.route.params;
  const [deliveryTime, setDeliveryTime] = useState<Date>(new Date());
  const [createOrderProduct, {loading, error, data}] =
    useMutation(CREATE_ORDER_PRODUCT);

  const placeOrder = async () => {
    let orderProducts: OrderProductInputType[] =
      new Array<OrderProductInputType>();

    for (let i = 0; i < listData.length; i++) {
      orderProducts.push({
        deliveredAt: deliveryTime.toISOString(),
        deliveryAddress: deliveryAddress,
        totalCost: listData[i].productSize.fullPrice,
        userId: userId,
        commentary: commentary,
        count: listData[i].amount,
        fullPrice: listData[i].productSize.fullPrice,
        productSizeId: listData[i].productSize.id,
      });
    }
    await createOrderProduct({
      variables: {
        orderProducts: orderProducts,
      },
    }).then(() => {
      props.navigation.navigate('CompleteOrderScreen');
    });
  };

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ItemOrder
        id={item.id}
        imageUri={item.productSize.product.imageUri}
        foodName={item.productSize.product.title}
        size={item.productSize.title}
        priceValue={item.productSize.fullPrice}
        amount={item.amount}
      />
    ),
    [listData],
  );

  return (
    <GenericFlatList
      data={listData}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      removeClippedSubviews={false}
      ListHeaderComponent={
        <ListHeaderOrder
          address={deliveryAddress}
          setAddress={setDeliveryAddress}
          deliveryTime={deliveryTime}
          setDeliveryTime={setDeliveryTime}
        />
      }
      ListFooterComponent={
        <ListFooterOrder
          totalPrice={totalCost}
          onPressPlaceOrder={placeOrder}
          note={commentary}
          setNote={setCommentary}
          isLoading={loading}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
});
