import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemCreateShopDisplay(props: ThisProps): JSX.Element {
  const navigateToCreateShopAccount = () => {
    props.navigation.navigate('CreateShopAccountScreen');
  };

  return (
    <GenericTextNavigationDisplay
      settingName={'Create a shop account'}
      onPressItem={navigateToCreateShopAccount}
    />
  );
}
