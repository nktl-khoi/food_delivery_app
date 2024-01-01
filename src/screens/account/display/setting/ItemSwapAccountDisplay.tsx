import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_USER_LOGIN_ROLE} from '../../AccountQuery';
import {UserRole} from '../../../../types/constants';
import ConfirmDialog from '../../../../components/dialogs/ConfirmDialog';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';
import {ActivityIndicator, StyleSheet} from 'react-native';

type ThisProps = {
  navigation: any;
  params: any;
};

export default function ItemSwapAccountDisplay(props: ThisProps): JSX.Element {
  const [userId, setUserId] = useState(props.params.userId);
  const [updateLoginRole, {data, loading}] = useMutation(
    UPDATE_USER_LOGIN_ROLE,
  );
  console.log(props.params.loginAs);

  const changeToShop = async () => {
    if (props.params.loginAs === UserRole.SHOP_OWNER) {
      await updateLoginRole({
        variables: {
          userId: userId,
          role: UserRole.USER,
        },
      }).then(() => {
        props.navigation.replace('MainStack');
      });
    } else if (props.params.loginAs === UserRole.USER) {
      await updateLoginRole({
        variables: {
          userId: userId,
          role: UserRole.SHOP_OWNER,
        },
      }).then(() => {
        props.navigation.replace('MainStack');
      });
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <ConfirmDialog
          onPressOk={changeToShop}
          bigTitleText={'WARNING'}
          titleText={
            props.params.role === UserRole.USER
              ? 'Are you want to change from user account to shop account'
              : 'Are you want to change from shop account to user account'
          }
          title={'Swap account'}
          buttonStyle={styles.button}
          titleStyle={styles.titleButton}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  titleButton: {color: colors.darkBlack, fontFamily: fonts.POPPINS_BOLD},
});
