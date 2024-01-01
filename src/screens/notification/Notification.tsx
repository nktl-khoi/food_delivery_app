import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from '../account/AccountQuery';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {useFocusEffect} from '@react-navigation/native';
import NotificationWithData from './NotificationWithData';

type ThisProps = {
  navigation: any;
};

export default function Notification(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <NotificationWithData
      navigation={props.navigation}
      userId={data.getUserByFirebaseUID.id}
    />
  );
}
