import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';
import EmptyAccountTab from '../../../accounts/generic/EmptyAccountTab';

import {GET_LIST_ACCOUNT_REPORT} from '../../../accounts/AccountListQuery';
import ReportList from '../reported_account/ReportList';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReportAccountTab(props: ThisProps): JSX.Element {
  const accountId = props.route.params.accountId;

  const {data, loading, refetch} = useQuery(GET_LIST_ACCOUNT_REPORT, {
    variables: {
      id: accountId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getListAccountReport?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <ReportList
              data={
                data?.getListAccountReport ? data?.getListAccountReport : null
              }
              navigation={props.navigation}
              title={'This account has some report'}
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
