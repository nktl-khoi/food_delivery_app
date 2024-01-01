import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';
import {GET_ALL_REPORT_WITH_MARK} from '../ReportListQuery';
import {ReportStatus} from '../../../types/constants';
import EmptyAccountTab from '../../accounts/generic/EmptyAccountTab';
import ReportList from '../../account_details/tab/reported_account/ReportList';

type ThisProps = {
  navigation: any;
  mark: ReportStatus;
};

export default function GenericReportListTab(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ALL_REPORT_WITH_MARK, {
    variables: {
      mark: props.mark,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data === null ||
      data?.getAllReportDetailListWithMarkStatus?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <ReportList
              data={
                data?.getAllReportDetailListWithMarkStatus
                  ? data?.getAllReportDetailListWithMarkStatus
                  : null
              }
              navigation={props.navigation}
              title={'All reports'}
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
