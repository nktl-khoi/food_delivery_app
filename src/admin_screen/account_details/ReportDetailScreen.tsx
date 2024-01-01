import {useQuery} from '@apollo/client';
import {GET_REPORT_DETAILS} from '../accounts/AccountListQuery';
import {useFocusEffect} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import ReportDetailWithData from './ReportDetailWithData';
import {SafeAreaView} from 'react-native-safe-area-context';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReportDetailScreen(props: ThisProps): JSX.Element {
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
      <ReportDetailWithData
        navigation={props.navigation}
        data={data ? data.getReportDetails : null}
        refetch={refetch}
      />
    </SafeAreaView>
  );
}
