import {View} from 'react-native';
import GenericTextNavigationDisplay from '../../../components/texts/generics/GenericTextNavigationDisplay';
import {ComponentStyle} from '../../../types/GenericType';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';

type ThisProps = {
  navigation: any;
  textStyle?: ComponentStyle;
  shopName: string;
  shopId: string;
};

export default function ItemVendorDisplay(props: ThisProps): JSX.Element {
  const navigateToVendorDetailsScreen = () => {
    props.navigation.navigate('VendorDetailsScreen', {
      shopId: props.shopId,
    });
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <ItemTitleText>Shop: </ItemTitleText>
      <GenericTextNavigationDisplay
        settingName={props.shopName}
        onPressItem={navigateToVendorDetailsScreen}
        textStyle={props.textStyle}
      />
    </View>
  );
}
