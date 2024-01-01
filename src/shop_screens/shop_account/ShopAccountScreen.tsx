import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';
import AvatarDisplay from '../../screens/account/display/AvatarDisplay';
import BasicInfoDisplay from '../../screens/account/display/basic_info/BasicInfoDisplay';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {useFocusEffect} from '@react-navigation/native';
import {GET_SHOP_INFO_BY_FIREBASE_UID} from '../ShopAccountQuery';
import {useQuery} from '@apollo/client';
import SettingDisplay from '../../screens/account/display/setting/SettingDisplay';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ShopAccountScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_SHOP_INFO_BY_FIREBASE_UID, {
    variables: {
      firebaseUID: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <SafeAreaView></SafeAreaView>

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <AvatarDisplay
          avatarUri={data?.getShopInfoByFirebaseUID?.imageUri}
          name={data?.getShopInfoByFirebaseUID?.shopName}
          email={data?.getShopInfoByFirebaseUID?.user.account.email}
          isEdit={false}
        />
      )}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <BasicInfoDisplay
          phone={data?.getShopInfoByFirebaseUID?.shopPhoneNumber}
          address={data?.getShopInfoByFirebaseUID?.shopAddress}
        />
      )}
      <SettingDisplay
        params={{
          userId: data?.getShopInfoByFirebaseUID?.userId,
          avatarUri: data?.getShopInfoByFirebaseUID?.imageUri,
          name: data?.getShopInfoByFirebaseUID?.shopName,
          email: data?.getShopInfoByFirebaseUID?.user.account.email,
          phone: data?.getShopInfoByFirebaseUID?.shopPhoneNumber,
          address: data?.getShopInfoByFirebaseUID?.shopAddress,
          role: data?.getShopInfoByFirebaseUID?.user.account.role,
          loginAs: data?.getShopInfoByFirebaseUID?.user.loginAs,
          shopId: data?.getShopInfoByFirebaseUID?.id,
        }}
        navigation={props.navigation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 12,
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {},
});
