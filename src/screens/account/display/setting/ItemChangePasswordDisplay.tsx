import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemChangePasswordDisplay(
  props: ThisProps,
): JSX.Element {
  const navigateToChangePasswordScreen = () => {
    props.navigation.navigate('ChangePasswordScreen');
  };
  return (
    <GenericTextNavigationDisplay
      settingName={'Change password'}
      onPressItem={navigateToChangePasswordScreen}
    />
  );
}
