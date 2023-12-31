import {SafeAreaView} from 'react-native-safe-area-context';
import VendorDetailsWithData from './VendorDetailsWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function VendorDetailsScreen(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView>
      <VendorDetailsWithData
        shopId={props.route.params.shopId}
        navigation={props.navigation}
      />
    </SafeAreaView>
  );
}
