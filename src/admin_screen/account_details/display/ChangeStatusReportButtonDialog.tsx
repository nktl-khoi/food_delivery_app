import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';
import {ReportStatus} from '../../../types/constants';
import {ActivityIndicator} from 'react-native';
import {CHANGE_MARK_STATUS_REPORT} from '../../report_list/ReportListQuery';

type ThisProps = {
  refetch: any;
  successText: string;
  titleTextButton: string;
  titleButton: string;
  color: string;
  reportId: string;
  mark: ReportStatus;
};

export default function ChangeStatusReportButtonDialog(
  props: ThisProps,
): JSX.Element {
  const [changeMarkStatus, {data, loading, error}] = useMutation(
    CHANGE_MARK_STATUS_REPORT,
  );

  const changeMarkStatusAction = async () => {
    await changeMarkStatus({
      variables: {
        reportAccountId: props.reportId,
        mark: props.mark,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: props.successText});
    });
  };
  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <ConfirmDialog
      onPressOk={changeMarkStatusAction}
      bigTitleText={'WARNING'}
      titleText={props.titleTextButton}
      title={props.titleButton}
      buttonStyle={{backgroundColor: props.color, paddingVertical: 12}}
      titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
    />
  );
}
