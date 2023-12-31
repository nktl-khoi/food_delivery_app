import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';
import {DELETE_ALL_CART_OF_USER} from '../CartQuery';
import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';

type ThisProps = {
  userId: string;
  refetch: any;
};

export default function DeleteAllDialog(props: ThisProps): JSX.Element {
  const [deleteAllCartProductsOfUser, {data, loading, error}] = useMutation(
    DELETE_ALL_CART_OF_USER,
  );
  const deleteAction = async () => {
    await deleteAllCartProductsOfUser({
      variables: {
        userId: props.userId,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: 'All item deleted success'});
    });
  };
  return (
    <ConfirmDialog
      onPressOk={deleteAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure delete all items'}
      title={'Delete all'}
      buttonStyle={{backgroundColor: colors.primary}}
      titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
    />
  );
}
