import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';

import {useQuery} from '@apollo/client';

import {FIREBASE_AUTH} from '../../../auth/firebaseConfig';
import InComingOrderTab from './in_coming/InComingOrderTab';
import CompleteOrderTab from './complete/CompleteOrderTab';
import {GET_SHOP_INFO_BY_FIREBASE_UID} from '../../ShopAccountQuery';

type ThisProps = {
  navigation: any;
};

export function MainTabManageOrderScreen(props: ThisProps): JSX.Element {
  const [index, setIndex] = useState(0);
  const {data, loading} = useQuery(GET_SHOP_INFO_BY_FIREBASE_UID, {
    variables: {
      firebaseUID: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  return (
    <>
      <Tab
        indicatorStyle={{start: '25%'}}
        value={index}
        onChange={e => setIndex(e)}>
        <Tab.Item title="In coming" />
        <Tab.Item title="Complete" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <InComingOrderTab
            navigation={props.navigation}
            shopId={data?.getShopInfoByFirebaseUID?.id}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <CompleteOrderTab
            navigation={props.navigation}
            shopId={data?.getShopInfoByFirebaseUID?.id}
          />
        </TabView.Item>
      </TabView>
    </>
  );
}
