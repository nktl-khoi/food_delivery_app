import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';
import EmptyCompleteOrder from './EmptyCompleteOrder';
import {GET_COMPLETE_ORDER_OF_SHOP} from '../../ShopManageOrderQuery';
import HistoryOrderList from '../../../../screens/cart/display/HistoryOrderList';

type ThisProps = {
  navigation: any;
  shopId: string;
};

export default function CompleteOrderTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_COMPLETE_ORDER_OF_SHOP, {
    variables: {
      shopId: props.shopId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getCompleteOrdersOfShop?.length <= 0 ? (
        <EmptyCompleteOrder />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <HistoryOrderList
              data={
                data?.getCompleteOrdersOfShop
                  ? data.getCompleteOrdersOfShop
                  : {}
              }
              navigation={props.navigation}
            />
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
