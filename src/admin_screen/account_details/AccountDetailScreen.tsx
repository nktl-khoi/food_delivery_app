import {MainTabAccountDetail} from './tab/MainTabAccountDetail';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AccountDetailScreen(props: ThisProps): JSX.Element {
  return (
    <>
      <MainTabAccountDetail navigation={props.navigation} route={props.route} />
    </>
  );
}
