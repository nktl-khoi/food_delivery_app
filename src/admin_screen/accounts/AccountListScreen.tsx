import {SafeAreaView} from 'react-native-safe-area-context';
import {MainTabAccountListScreen} from './tab/MainTabAccountListScreen';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AccountListScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <MainTabAccountListScreen navigation={props.navigation} />
    </>
  );
}
