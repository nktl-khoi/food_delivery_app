import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import BasicInfoDisplay from './display/basic_info/BasicInfoDisplay';
import AvatarDisplay from './display/AvatarDisplay';
import MyFavoriteDisplay from './display/MyFavoriteDisplay';
import SettingDisplay from './display/setting/SettingDisplay';
import colors from '../../styles/colors';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from './AccountQuery';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {useFocusEffect} from '@react-navigation/native';

const list = [
  {
    id: 1,
    foodName: 'Name',
    vendorName: 'Vendor',
    priceValue: 30000,
    rating: 3.4,
  },
  {
    id: 2,
    foodName: 'Name 2',
    vendorName: 'Vendor 2',
    priceValue: 20000,
    rating: 3.1,
  },
  {
    id: 3,
    foodName: 'Name 3',
    vendorName: 'Vendor 3',
    priceValue: 10000,
    rating: 4.4,
  },
  {
    id: 4,
    foodName: 'Name 4',
    vendorName: 'Vendor 4',
    priceValue: 3000,
    rating: 2.4,
  },
];

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AccountScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <AvatarDisplay
          avatarUri={data?.getUserByFirebaseUID?.imageUrl}
          name={data?.getUserByFirebaseUID?.name}
          email={data?.getUserByFirebaseUID?.account.email}
          isEdit={false}
        />
      )}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <BasicInfoDisplay
          phone={data?.getUserByFirebaseUID?.phoneNumber}
          address={data?.getUserByFirebaseUID?.defaultAddress}
        />
      )}
      <MyFavoriteDisplay data={list} navigation={props.navigation} />
      <SettingDisplay
        params={{
          userId: data?.getUserByFirebaseUID?.id,
          avatarUri: data?.getUserByFirebaseUID?.imageUrl,
          name: data?.getUserByFirebaseUID?.name,
          email: data?.getUserByFirebaseUID?.account.email,
          phone: data?.getUserByFirebaseUID?.phoneNumber,
          address: data?.getUserByFirebaseUID?.defaultAddress,
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
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {},
});
