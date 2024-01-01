import GenericTabUserNotification from './GenericTabUserNotification';
import {NotiStatus} from '../../../types/constants';

type ThisProps = {
  navigation: any;
  userId: string;
  tabIndex: number;
};

export default function NotificationReadTab(props: ThisProps): JSX.Element {
  return (
    <GenericTabUserNotification
      navigation={props.navigation}
      status={NotiStatus.READ}
      userId={props.userId}
      tabIndex={props.tabIndex}
    />
  );
}
