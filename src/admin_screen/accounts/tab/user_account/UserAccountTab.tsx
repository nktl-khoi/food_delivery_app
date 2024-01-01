import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';

import EmptyAccountTab from '../../generic/EmptyAccountTab';
import {GET_ALL_USERS} from '../../AccountListQuery';
import UserAccountList from './UserAccountList';

type ThisProps = {
  navigation: any;
};

export default function UserAccountTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ALL_USERS);

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getAllUsers?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <UserAccountList
              data={data?.getAllUsers ? data.getAllUsers : null}
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
