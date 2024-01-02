import {SafeAreaView} from 'react-native-safe-area-context';
import ReportedByTabBan from './ReportedByTabBan';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AllReportScreen(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView>
      <ReportedByTabBan navigation={props.navigation} route={props.route} />
    </SafeAreaView>
  );
}
