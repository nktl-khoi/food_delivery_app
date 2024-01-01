import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';

import NotificationReadTab from './NotificationReadTab';
import NotificationUnreadTab from './NotificationUnreadTab';

type ThisProps = {
  navigation: any;
  userId: string;
};

export function MainTabNotification(props: ThisProps): JSX.Element {
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
          <NotificationUnreadTab
            navigation={props.navigation}
            userId={props.userId}
            tabIndex={index}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <NotificationReadTab
            navigation={props.navigation}
            userId={props.userId}
            tabIndex={index}
          />
        </TabView.Item>
      </TabView>
    </>
  );
}
