import {SafeAreaView} from 'react-native-safe-area-context';
import {MainTabNotification} from './tab/MainTabNotification';

type ThisProps = {
  navigation: any;
  userId: string;
};

export default function NotificationWithData(props: ThisProps): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <MainTabNotification
        navigation={props.navigation}
        userId={props.userId}
      />
    </>
  );
}
