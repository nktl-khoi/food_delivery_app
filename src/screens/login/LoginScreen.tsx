import {ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {LoginWithoutAuthCheck} from './LoginWithoutAuthCheck';
import {SafeAreaView} from 'react-native-safe-area-context';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function LoginScreen(props: ThisProps): JSX.Element {
  const [authServiceInitialized, setAuthServiceInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('LOGIN SCREEN');

  useEffect(() => {
    setLoading(true);
    const auth = FIREBASE_AUTH;
    console.log('LOGIN SCREEN: AUTH CHECK');

    onAuthStateChanged(auth, user => {
      setAuthServiceInitialized(true);
      if (user) {
        props.navigation.navigate('MainStack');
        console.log('LOGIN SCREEN: AUTH CHECK - HAVE USER');
      }
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <LoginWithoutAuthCheck
          navigation={props.navigation}
          route={props.route}
        />
      )}
    </SafeAreaView>
  );
}
