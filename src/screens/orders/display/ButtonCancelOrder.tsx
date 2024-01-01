import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';
import {CANCEL_ORDER} from '../OrderQuery';

type ThisProps = {
  orderId: string;
  navigation: any;
};

export default function ButtonCancelOrder(props: ThisProps): JSX.Element {
  const [cancelOrder, {data, loading, error}] = useMutation(CANCEL_ORDER);
  const cancelOrderAction = async () => {
    await cancelOrder({
      variables: {
        orderId: props.orderId,
      },
    }).then(() => {
      props.navigation.goBack();
      Snackbar.show({text: 'Order canceled success'});
    });
  };
  return (
    <ConfirmDialog
      onPressOk={cancelOrderAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure cancel this order'}
      title={'CANCEL ORDER'}
      buttonStyle={{paddingVertical: 12, backgroundColor: colors.red}}
      titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
    />
  );
}
