import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
};

export default function ItemChangeToShopAccountDisplay(
  props: ThisProps,
): JSX.Element {
  const changeToShop = () => {};

  return (
    <GenericTextNavigationDisplay
      settingName={'Change to shop account'}
      onPressItem={changeToShop}
    />
  );
}
