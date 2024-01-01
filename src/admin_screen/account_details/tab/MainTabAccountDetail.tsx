import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import EmptyAccountTab from '../../accounts/generic/EmptyAccountTab';
import AccountInfoTab from './info/AccountInfoTab';
import ReportedByTab from './reported_account/ReportedByTab';
import ReportAccountTab from './account_report/ReportAccountTab';

type ThisProps = {
  navigation: any;
  route: any;
};

export function MainTabAccountDetail(props: ThisProps): JSX.Element {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)}>
        <Tab.Item title="Info" />
        <Tab.Item title="Reported" />
        <Tab.Item title="Report" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <AccountInfoTab navigation={props.navigation} route={props.route} />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ReportedByTab navigation={props.navigation} route={props.route} />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ReportAccountTab navigation={props.navigation} route={props.route} />
        </TabView.Item>
      </TabView>
    </>
  );
}
