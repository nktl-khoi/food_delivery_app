import {Icon} from '@rneui/themed';
import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';
import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import {ADD_TO_FAVOURITE} from '../../../screens/account/AccountQuery';
import {CreateFavouriteInputType} from '../../../types/ItemType';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  userId: string;
  productId: string;
  refetch: any;
};

export default function UnFavouriteButton(props: ThisProps): JSX.Element {
  const [addToFavourite, {data, loading, error}] =
    useMutation(ADD_TO_FAVOURITE);

  const addAction = async () => {
    let input: CreateFavouriteInputType = {
      userId: props.userId,
      productId: props.productId,
    };
    await addToFavourite({
      variables: {
        favouriteInput: input,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: 'Add item to favourite success'});
    });
  };

  if (loading) {
    return <ActivityIndicator size={'small'} />;
  }
  return (
    <ConfirmDialog
      onPressOk={addAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure add this item to favourite'}
      icon={
        <Icon
          type="antdesign"
          name="hearto"
          size={24}
          color={colors.heartColor}
        />
      }
    />
  );
}
