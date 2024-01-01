import {SafeAreaView} from 'react-native-safe-area-context';
import {MainTabManageOrderScreen} from './tabs/MainTabManageOrderScreen';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ShopManageOrderScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <MainTabManageOrderScreen navigation={props.navigation} />
    </>
  );
}
