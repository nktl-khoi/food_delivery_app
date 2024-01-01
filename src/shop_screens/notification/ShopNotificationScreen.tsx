import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';

import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {GET_SHOP_INFO_BY_FIREBASE_UID} from '../ShopAccountQuery';
import ShopNotificationWithData from './ShopNotificationWithData';

type ThisProps = {
  navigation: any;
};

export default function ShopNotificationScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_SHOP_INFO_BY_FIREBASE_UID, {
    variables: {
      firebaseUID: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <ShopNotificationWithData
      navigation={props.navigation}
      shopId={data.getShopInfoByFirebaseUID?.id}
    />
  );
}
