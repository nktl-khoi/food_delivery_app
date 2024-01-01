import {Icon} from '@rneui/themed';
import colors from '../../../styles/colors';
import {useMutation} from '@apollo/client';
import Snackbar from 'react-native-snackbar';
import ConfirmDialog from '../../../components/dialogs/ConfirmDialog';
import {REMOVE_FROM_FAVOURITE} from '../../../screens/account/AccountQuery';
import {RemoveFromFavouriteInputType} from '../../../types/ItemType';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  userId: string;
  productId: string;
  refetch: any;
};

export default function FavouriteButton(props: ThisProps): JSX.Element {
  const [removeFromFavourite, {data, loading, error}] = useMutation(
    REMOVE_FROM_FAVOURITE,
  );
  const removeAction = async () => {
    let input: RemoveFromFavouriteInputType = {
      userId: props.userId,
      productId: props.productId,
    };
    await removeFromFavourite({
      variables: {
        favouriteInput: input,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: 'Remove item from favourite success'});
    });
  };

  if (loading) {
    return <ActivityIndicator size={'small'} />;
  }
  return (
    <ConfirmDialog
      onPressOk={removeAction}
      bigTitleText={'WARNING'}
      titleText={'Are you sure remove this item from favourite'}
      icon={
        <Icon
          type="antdesign"
          name="heart"
          size={24}
          color={colors.heartColor}
        />
      }
    />
  );
}
