import React from 'react';
import {Text} from '@rneui/themed';

import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from './screens/account/AccountQuery';
import {FIREBASE_AUTH} from './auth/firebaseConfig';
import {MainUserStack} from './screens/MainUserStack';
import {MainShopStack} from './shop_screens/MainShopStack';
import {useFocusEffect} from '@react-navigation/native';
import {AccountStatus, UserRole} from './types/constants';
import {MainAdminStack} from './admin_screen/MainAdminStack';
import BanScreen from './screens/ban/BanScreen';

type ThisProps = {
  navigation: any;
  route: any;
};

export function MainStack(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading)
    return (
      <SafeAreaView style={styles.containerLoading}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  console.log(FIREBASE_AUTH.currentUser?.uid);
  const loginAs = data?.getUserByFirebaseUID?.loginAs;
  const role = data?.getUserByFirebaseUID?.account?.role;
  const accountId = data?.getUserByFirebaseUID?.account?.id;
  const accountStatus = data?.getUserByFirebaseUID?.account?.status;
  console.log('DATA: ', data?.getUserByFirebaseUID);

  if (accountStatus === AccountStatus.BANNED && role !== UserRole.ADMIN) {
    return <BanScreen navigation={props.navigation} accountId={accountId} />;
  }

  if (loginAs === UserRole.USER) {
    return <MainUserStack />;
  }
  if (loginAs === UserRole.SHOP_OWNER) {
    return <MainShopStack />;
  }
  if (role === UserRole.ADMIN) {
    return <MainAdminStack />;
  }
  return (
    <SafeAreaView>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
