import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import GenericReportListTab from './GenericReportListTab';
import {ReportStatus} from '../../../types/constants';

type ThisProps = {
  navigation: any;
};

export function MainTabReportList(props: ThisProps): JSX.Element {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab
        indicatorStyle={{start: '25%'}}
        value={index}
        onChange={e => setIndex(e)}>
        <Tab.Item title="Unread" />
        <Tab.Item title="Read" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <GenericReportListTab
            navigation={props.navigation}
            mark={ReportStatus.UN_READ}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <GenericReportListTab
            navigation={props.navigation}
            mark={ReportStatus.READ}
          />
        </TabView.Item>
      </TabView>
    </>
  );
}
