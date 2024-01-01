import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {useFocusEffect} from '@react-navigation/native';
import EmptyAccountTab from '../../generic/EmptyAccountTab';
import {GET_ALL_SHOPS} from '../../AccountListQuery';
import ShopAccountList from './ShopAccountList';

type ThisProps = {
  navigation: any;
};

export default function ShopAccountTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ALL_SHOPS);

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getAllShop?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <ShopAccountList
              data={data?.getAllShop ? data.getAllShop : null}
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
