import {NotiStatus} from '../../../types/constants';
import GenericTabShopNotification from './GenericTabShopNotification';

type ThisProps = {
  navigation: any;
  shopId: string;
  tabIndex: number;
};

export default function ShopNotificationUnreadTab(
  props: ThisProps,
): JSX.Element {
  return (
    <GenericTabShopNotification
      navigation={props.navigation}
      status={NotiStatus.UN_READ}
      shopId={props.shopId}
      tabIndex={props.tabIndex}
    />
  );
}
