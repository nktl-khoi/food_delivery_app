import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import ShopNotificationReadTab from './ShopNotificationReadTab';
import ShopNotificationUnreadTab from './ShopNotificationUnreadTab';

type ThisProps = {
  navigation: any;
  shopId: string;
};

export function MainTabShopNotification(props: ThisProps): JSX.Element {
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
          <ShopNotificationUnreadTab
            navigation={props.navigation}
            shopId={props.shopId}
            tabIndex={index}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ShopNotificationReadTab
            navigation={props.navigation}
            shopId={props.shopId}
            tabIndex={index}
          />
        </TabView.Item>
      </TabView>
    </>
  );
}
