import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';
import {CHANGE_ACCOUNT_STATUS} from '../../accounts/AccountListQuery';
import {AccountStatus} from '../../../types/constants';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  refetch: any;
  status: AccountStatus;
  accountId: string;
  successText: string;
  titleTextButton: string;
  titleButton: string;
  color: string;
};

export default function BanButtonDialog(props: ThisProps): JSX.Element {
  const [changeStatusAccount, {data, loading, error}] = useMutation(
    CHANGE_ACCOUNT_STATUS,
  );

  const banAccount = async () => {
    await changeStatusAccount({
      variables: {
        accountId: props.accountId,
        status: props.status,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: props.successText});
    });
  };
  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <ConfirmDialog
      onPressOk={banAccount}
      bigTitleText={'WARNING'}
      titleText={props.titleTextButton}
      title={props.titleButton}
      buttonStyle={{backgroundColor: props.color, paddingVertical: 12}}
      titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
    />
  );
}
