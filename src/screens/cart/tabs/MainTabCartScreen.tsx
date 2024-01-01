import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import HistoryOrderTab from './history/HistoryOrderTab';
import MyCartTab from './my_cart/MyCartTab';
import OnGoingTab from './on_going/OnGoingTab';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from '../../account/AccountQuery';
import {FIREBASE_AUTH} from '../../../auth/firebaseConfig';

type ThisProps = {
  navigation: any;
};

export function MainTabCartScreen(props: ThisProps): JSX.Element {
  const [index, setIndex] = useState(0);
  const {data, loading} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  return (
    <>
      <Tab value={index} onChange={e => setIndex(e)}>
        <Tab.Item title="My cart" />
        <Tab.Item title="On going" />
        <Tab.Item title="History" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <MyCartTab
            userId={data?.getUserByFirebaseUID?.id}
            navigation={props.navigation}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <OnGoingTab
            navigation={props.navigation}
            userId={data?.getUserByFirebaseUID?.id}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <HistoryOrderTab
            navigation={props.navigation}
            userId={data?.getUserByFirebaseUID?.id}
          />
        </TabView.Item>
      </TabView>
    </>
  );
}
