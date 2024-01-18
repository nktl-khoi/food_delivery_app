import {StyleSheet, View} from 'react-native';
import React from 'react';

import {ActivityIndicator} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_COMPLETE_ORDER_OF_USER} from '../../CartQuery';
import {useFocusEffect} from '@react-navigation/native';
import EmptyHistoryOrderTab from './EmptyHistoryOrderTab';
import HistoryOrderList from '../../display/HistoryOrderList';

type ThisProps = {
  navigation: any;
  userId: string;
};

export default function HistoryOrderTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_COMPLETE_ORDER_OF_USER, {
    variables: {
      userId: props.userId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getCompleteOrdersOfUser?.length <= 0 ? (
        <EmptyHistoryOrderTab navigation={props.navigation} />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <HistoryOrderList
              data={
                data?.getCompleteOrdersOfUser
                  ? data.getCompleteOrdersOfUser
                  : {}
              }
              navigation={props.navigation}
              detailScreenName={'OrderDetailsScreen'}
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
