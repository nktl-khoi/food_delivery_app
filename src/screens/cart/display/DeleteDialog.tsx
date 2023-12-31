import {Icon} from '@rneui/themed';
import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';
import {DELETE_A_CART_PRODUCT} from '../CartQuery';
import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';

type ThisProps = {
  cartProductId: string;
  refetch: any;
};

export default function DeleteDialog(props: ThisProps): JSX.Element {
  const [deleteCartProduct, {data, loading, error}] = useMutation(
    DELETE_A_CART_PRODUCT,
  );
  const deleteAction = async () => {
    await deleteCartProduct({
      variables: {
        cartProductId: props.cartProductId,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: 'Item deleted success'});
    });
  };
  return (
    <ConfirmDialog
      onPressOk={deleteAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure delete this item'}
      icon={
        <Icon type="font-awesome" name="trash" size={24} color={colors.red} />
      }
    />
  );
}
