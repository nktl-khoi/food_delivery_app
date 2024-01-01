import {NotiStatus} from '../../../types/constants';
import GenericTabShopNotification from './GenericTabShopNotification';

type ThisProps = {
  navigation: any;
  shopId: string;
  tabIndex: number;
};

export default function ShopNotificationReadTab(props: ThisProps): JSX.Element {
  return (
    <GenericTabShopNotification
      navigation={props.navigation}
      status={NotiStatus.READ}
      shopId={props.shopId}
      tabIndex={props.tabIndex}
    />
  );
}
