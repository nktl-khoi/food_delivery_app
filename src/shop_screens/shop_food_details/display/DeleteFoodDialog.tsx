import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import fonts from '../../../styles/fonts';
import {DELETE_PRODUCT} from '../ShopFoodDetailQuery';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  foodId: string;
  navigation: any;
};

export default function DeleteFoodDialog(props: ThisProps): JSX.Element {
  const [deleteProduct, {data, loading, error}] = useMutation(DELETE_PRODUCT);
  const deleteAction = async () => {
    await deleteProduct({
      variables: {
        productId: props.foodId,
      },
    }).then(() => {
      props.navigation.navigate('ShopCategoryScreen');
      Snackbar.show({text: 'Product deleted success'});
    });
  };
  return (
    <>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <ConfirmDialog
          onPressOk={deleteAction}
          bigTitleText={'WARNING'}
          titleText={'Are you sure delete this items'}
          title={'DELETE FOOD'}
          buttonStyle={{paddingVertical: 12, backgroundColor: colors.red}}
          titleStyle={{color: colors.white, fontFamily: fonts.POPPINS_BOLD}}
        />
      )}
    </>
  );
}
