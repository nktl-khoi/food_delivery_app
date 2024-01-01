import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';

import UserAccountTab from './user_account/UserAccountTab';
import ShopAccountTab from './shop_account/ShopAccountTab';

type ThisProps = {
  navigation: any;
};

export function MainTabAccountListScreen(props: ThisProps): JSX.Element {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab
        indicatorStyle={{start: '25%'}}
        value={index}
        onChange={e => setIndex(e)}>
        <Tab.Item title="User account" />
        <Tab.Item title="Shop account" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <UserAccountTab navigation={props.navigation} />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ShopAccountTab navigation={props.navigation} />
        </TabView.Item>
      </TabView>
    </>
  );
}
