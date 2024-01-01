import images from '../../styles/images';
import GenericEmptyTab from '../cart/tabs/generic/GenericEmptyTab';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CompleteOrderScreen(props: ThisProps): JSX.Element {
  const navigateToCartScreen = () => {
    props.navigation.navigate('CartScreen');
  };
  return (
    <GenericEmptyTab
      onPressButton={navigateToCartScreen}
      imageSource={images.COMPLETE}
      title={'Thank you for ordering!'}
      body={'Your order was placed. It will be started as soon as possible.'}
      buttonTitle={'CONTINUE SHOPPING'}
    />
  );
}
