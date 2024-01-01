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
import {SafeAreaView} from 'react-native-safe-area-context';

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
      <SafeAreaView></SafeAreaView>
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
      <MyFavoriteDisplay
        userId={data?.getUserByFirebaseUID?.id}
        navigation={props.navigation}
      />
      <SettingDisplay
        params={{
          userId: data?.getUserByFirebaseUID?.id,
          avatarUri: data?.getUserByFirebaseUID?.imageUrl,
          name: data?.getUserByFirebaseUID?.name,
          email: data?.getUserByFirebaseUID?.account.email,
          phone: data?.getUserByFirebaseUID?.phoneNumber,
          address: data?.getUserByFirebaseUID?.defaultAddress,
          role: data?.getUserByFirebaseUID?.account.role,
          loginAs: data?.getUserByFirebaseUID?.loginAs,
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
