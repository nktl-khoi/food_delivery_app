import {NotiStatus} from '../../../types/constants';
import GenericTabAdminNotification from './GenericTabAdminNotification';

type ThisProps = {
  navigation: any;
  tabIndex: number;
};

export default function AdminNotificationReadTab(
  props: ThisProps,
): JSX.Element {
  return (
    <GenericTabAdminNotification
      navigation={props.navigation}
      status={NotiStatus.READ}
      tabIndex={props.tabIndex}
    />
  );
}
