import {ActivityIndicator, StyleSheet, View} from 'react-native';
import CartListFood from '../../display/CartListFood';
import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_ALL_CART_PRODUCT_OF_USER} from '../../CartQuery';
import {useFocusEffect} from '@react-navigation/native';
import EmptyCartTab from './EmptyCartTab';

type ThisProps = {
  navigation: any;
  userId: string;
};

export default function MyCartTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ALL_CART_PRODUCT_OF_USER, {
    variables: {
      userId: props.userId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {!data ? (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <CartListFood
              data={
                data?.getAllCartProductOfUser
                  ? data.getAllCartProductOfUser
                  : {}
              }
              userId={props.userId}
              refetch={refetch}
              navigation={props.navigation}
            />
          )}
        </View>
      ) : (
        <EmptyCartTab navigation={props.navigation} />
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
