import {SafeAreaView} from 'react-native-safe-area-context';
import ShopCategoryWithData from './ShopCategoryWithData';
import {useQuery} from '@apollo/client';
import {GET_SHOP_INFO_BY_FIREBASE_UID} from '../ShopAccountQuery';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ShopCategoryScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_SHOP_INFO_BY_FIREBASE_UID, {
    variables: {
      firebaseUID: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <SafeAreaView>
      <ShopCategoryWithData
        shopId={data?.getShopInfoByFirebaseUID?.id}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
}
