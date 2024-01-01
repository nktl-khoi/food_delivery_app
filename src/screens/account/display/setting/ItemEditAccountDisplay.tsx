import GenericTextNavigationDisplay from '../../../../components/texts/generics/GenericTextNavigationDisplay';
import {UserRole} from '../../../../types/constants';

type ThisProps = {
  navigation: any;
  params: any;
};

export default function ItemEditAccountDisplay(props: ThisProps): JSX.Element {
  const navigateToEditAccountScreen = () => {
    if (props.params.loginAs === UserRole.SHOP_OWNER) {
      props.navigation.navigate('EditShopAccountScreen', {
        user: props.params,
      });
    } else {
      props.navigation.navigate('EditAccountScreen', {
        user: props.params,
      });
    }
  };
  return (
    <GenericTextNavigationDisplay
      settingName={'Edit info'}
      onPressItem={navigateToEditAccountScreen}
    />
  );
}
