import {NotiStatus} from '../../../types/constants';
import GenericTabAdminNotification from './GenericTabAdminNotification';

type ThisProps = {
  navigation: any;
  tabIndex: number;
};

export default function AdminNotificationUnreadTab(
  props: ThisProps,
): JSX.Element {
  return (
    <GenericTabAdminNotification
      navigation={props.navigation}
      status={NotiStatus.UN_READ}
      tabIndex={props.tabIndex}
    />
  );
}
