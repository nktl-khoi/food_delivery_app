import {MainTabCartScreen} from './tabs/MainTabCartScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CartScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <MainTabCartScreen navigation={props.navigation} />
    </>
  );
}
