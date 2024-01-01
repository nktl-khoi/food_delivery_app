import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';
import {CHANGE_ORDER_STATUS} from '../OrderQuery';
import {OrderStatus} from '../../../types/constants';

type ThisProps = {
  orderId: string;
  navigation: any;
};

export default function ButtonAcceptOrder(props: ThisProps): JSX.Element {
  const [changeOrderStatus, {data, loading, error}] =
    useMutation(CHANGE_ORDER_STATUS);
  const cancelOrderAction = async () => {
    await changeOrderStatus({
      variables: {
        orderId: props.orderId,
        status: OrderStatus.ON_THE_WAY,
      },
    }).then(() => {
      props.navigation.goBack();
      Snackbar.show({text: 'Order accepted'});
    });
  };
  return (
    <ConfirmDialog
      onPressOk={cancelOrderAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure accept this order'}
      title={'ACCEPT ORDER'}
      buttonStyle={{paddingVertical: 12, backgroundColor: colors.green}}
      titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
    />
  );
}
