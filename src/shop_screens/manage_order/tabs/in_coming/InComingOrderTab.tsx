import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';
import EmptyInComingTab from './EmptyInComingTab';
import {GET_ON_GOING_ORDER_OF_SHOP} from '../../ShopManageOrderQuery';
import OnGoingList from '../../../../screens/cart/display/OnGoingList';

type ThisProps = {
  navigation: any;
  shopId: string;
};

export default function InComingOrderTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ON_GOING_ORDER_OF_SHOP, {
    variables: {
      shopId: props.shopId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getOnGoingOrdersOfShop?.length <= 0 ? (
        <EmptyInComingTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <OnGoingList
              data={
                data?.getOnGoingOrdersOfShop ? data.getOnGoingOrdersOfShop : {}
              }
              detailScreenName={'OrderDetailScreenShop'}
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
