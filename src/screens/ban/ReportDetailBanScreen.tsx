import {useQuery} from '@apollo/client';

import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {GET_REPORT_DETAILS} from '../../admin_screen/accounts/AccountListQuery';
import ReportDetailBanWithData from './ReportDetailBanWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReportDetailBanScreen(props: ThisProps): JSX.Element {
  const reportDetailId = props.route.params.reportDetailId!;

  const {data, loading, refetch} = useQuery(GET_REPORT_DETAILS, {
    variables: {
      id: reportDetailId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'small'} />;

  return (
    <SafeAreaView>
      <ReportDetailBanWithData
        navigation={props.navigation}
        data={data ? data.getReportDetails : null}
        refetch={refetch}
      />
    </SafeAreaView>
  );
}
