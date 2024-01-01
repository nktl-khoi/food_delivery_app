import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import AdminNotificationUnreadTab from './AdminNotificationUnreadTab';
import AdminNotificationReadTab from './AdminNotificationReadTab';
import ItemLogoutDisplay from '../../../screens/account/display/setting/ItemLogoutDisplay';
import {View} from 'react-native';
import display from '../../../utils/display';

type ThisProps = {
  navigation: any;
};

export function MainTabAdminNotification(props: ThisProps): JSX.Element {
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
          <View>
            <LogoutButton navigation={props.navigation} />
            <AdminNotificationUnreadTab
              navigation={props.navigation}
              tabIndex={index}
            />
          </View>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <View>
            <LogoutButton navigation={props.navigation} />
            <AdminNotificationReadTab
              navigation={props.navigation}
              tabIndex={index}
            />
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
}

function LogoutButton(props: ThisProps): JSX.Element {
  return (
    <View
      style={{
        width: display.setWidth(30),
        alignSelf: 'flex-end',
        marginRight: 20,
      }}>
      <ItemLogoutDisplay isButton navigation={props.navigation} />
    </View>
  );
}
