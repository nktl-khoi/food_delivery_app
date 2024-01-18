import {StyleSheet, View} from 'react-native';
import React from 'react';
import OnGoingList from '../../display/OnGoingList';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ON_GOING_ORDER_OF_USER} from '../../CartQuery';
import {useFocusEffect} from '@react-navigation/native';
import EmptyOnGoingTab from './EmptyOnGoingTab';

type ThisProps = {
  navigation: any;
  userId: string;
};

export default function MyCartTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ON_GOING_ORDER_OF_USER, {
    variables: {
      userId: props.userId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getOnGoingOrdersOfUser?.length <= 0 ? (
        <EmptyOnGoingTab navigation={props.navigation} />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <OnGoingList
              data={
                data?.getOnGoingOrdersOfUser ? data.getOnGoingOrdersOfUser : {}
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
