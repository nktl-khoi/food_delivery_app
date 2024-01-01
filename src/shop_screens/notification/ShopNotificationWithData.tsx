import {SafeAreaView} from 'react-native-safe-area-context';
import {MainTabShopNotification} from './tab/MainTabShopNotification';

type ThisProps = {
  navigation: any;
  shopId: string;
};

export default function ShopNotificationWithData(
  props: ThisProps,
): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <MainTabShopNotification
        navigation={props.navigation}
        shopId={props.shopId}
      />
    </>
  );
}
