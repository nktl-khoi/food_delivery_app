import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReportedByTab from '../admin_screen/account_details/tab/reported_account/ReportedByTab';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AllReportScreen(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView>
      <ReportedByTab navigation={props.navigation} route={props.route} />
    </SafeAreaView>
  );
}
