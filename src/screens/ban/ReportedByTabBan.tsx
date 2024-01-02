import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';
import {GET_LIST_REPORTED_ACCOUNT} from '../../admin_screen/accounts/AccountListQuery';
import EmptyAccountTab from '../../admin_screen/accounts/generic/EmptyAccountTab';
import ReportListBan from './ReportListBan';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReportedByTabBan(props: ThisProps): JSX.Element {
  const accountId = props.route.params.accountId;

  const {data, loading, refetch} = useQuery(GET_LIST_REPORTED_ACCOUNT, {
    variables: {
      id: accountId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null || data?.getListReportedAccount?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <ReportListBan
              data={
                data?.getListReportedAccount
                  ? data?.getListReportedAccount
                  : null
              }
              navigation={props.navigation}
              title={'This account was reported by'}
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
