import {Icon} from '@rneui/themed';
import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';
import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import {CHANGE_NOTIFY_STATUS} from '../NotifyQuery';
import {NotiStatus} from '../../../types/constants';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  notificationId: string;
  status: NotiStatus;
  refetch: any;
};

export default function MarkViewButtonDialog(props: ThisProps): JSX.Element {
  const [changeNotifyStatus, {data, loading, error}] =
    useMutation(CHANGE_NOTIFY_STATUS);

  const changeNotifyStatusAction = async () => {
    if (props.status === NotiStatus.UN_READ) {
      await changeNotifyStatus({
        variables: {
          notifyId: props.notificationId,
          status: NotiStatus.READ,
        },
      }).then(() => {
        props.refetch();
        Snackbar.show({text: 'Notification change to read'});
      });
    } else {
      await changeNotifyStatus({
        variables: {
          notifyId: props.notificationId,
          status: NotiStatus.UN_READ,
        },
      }).then(() => {
        props.refetch();
        Snackbar.show({text: 'Notification change to unread'});
      });
    }
  };

  if (loading) return <ActivityIndicator size={'small'} />;

  if (props.status === NotiStatus.UN_READ) {
    return (
      <ConfirmDialog
        onPressOk={changeNotifyStatusAction}
        bigTitleText={'WARNING'}
        titleText={'Are you sure change this notification to read'}
        icon={
          <Icon
            type="material"
            name="bookmark"
            size={24}
            color={colors.darkBlack}
          />
        }
      />
    );
  }

  return (
    <ConfirmDialog
      onPressOk={changeNotifyStatusAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure change this notification to unread'}
      icon={
        <Icon type="material" name="bookmark" size={24} color={colors.green} />
      }
    />
  );
}
