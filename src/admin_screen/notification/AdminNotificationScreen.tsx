import {SafeAreaView} from 'react-native-safe-area-context';
import {MainTabAdminNotification} from './tab/MainTabAdminNotification';
import ItemLogoutDisplay from '../../screens/account/display/setting/ItemLogoutDisplay';

type ThisProps = {
  navigation: any;
};

export default function ShopNotificationScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>

      <MainTabAdminNotification navigation={props.navigation} />
    </>
  );
}

//  <ItemLogoutDisplay isButton navigation={props.navigation} />;
