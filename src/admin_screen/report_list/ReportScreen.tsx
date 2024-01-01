import {SafeAreaView} from 'react-native-safe-area-context';
import {MainTabReportList} from './tab/MainTabReportList';

type ThisProps = {
  navigation: any;
};

export default function ReportScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <MainTabReportList navigation={props.navigation} />
    </>
  );
}
