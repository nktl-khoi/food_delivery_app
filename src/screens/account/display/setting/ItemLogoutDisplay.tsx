import Snackbar from 'react-native-snackbar';
import {FIREBASE_AUTH} from '../../../../auth/firebaseConfig';
import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';
import {Button, Icon} from '@rneui/themed';
import colors from '../../../../styles/colors';
import {StyleSheet} from 'react-native';
import fonts from '../../../../styles/fonts';
import display from '../../../../utils/display';

type ThisProps = {
  navigation: any;
  isButton?: boolean;
};

export default function ItemLogoutDisplay(props: ThisProps): JSX.Element {
  const signOut = async () => {
    const auth = FIREBASE_AUTH;

    await auth
      .signOut()
      .then(() => {
        props.navigation.navigate('LoginScreen');
      })
      .catch(error => {
        Snackbar.show({text: error});
      });
  };

  if (props.isButton)
    return (
      <Button
        onPress={signOut}
        icon={
          <Icon name="logout" color={colors.white} size={20} type="material" />
        }
        buttonStyle={styles.addButtonEmpty}
        titleStyle={styles.addButtonEmptyText}>
        Log out
      </Button>
    );
  return (
    <GenericTextNavigationDisplay
      settingName={'Log out'}
      onPressItem={signOut}
    />
  );
}

const styles = StyleSheet.create({
  addButtonEmpty: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: display.setWidth(4),
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: 'space-evenly',
    elevation: 3,
    alignItems: 'center',
  },
  addButtonEmptyText: {
    fontSize: 12,
    fontFamily: fonts.POPPINS_MEDIUM,
    lineHeight: 12 * 1.4,
    color: colors.white,
    marginLeft: 10,
  },
});
