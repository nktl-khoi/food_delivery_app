import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';

type ThisProps = {
  navigation: any;
  params: {};
};

export default function ItemEditAccountDisplay(props: ThisProps): JSX.Element {
  const navigateToEditAccountScreen = () => {
    props.navigation.navigate('EditAccountScreen', {
      user: props.params,
    });
  };
  return (
    <GenericTextNavigationDisplay
      settingName={'Edit info'}
      onPressItem={navigateToEditAccountScreen}
    />
  );
}
