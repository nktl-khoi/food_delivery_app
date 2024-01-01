import images from '../../../../styles/images';
import React from 'react';
import GenericEmptyTab from '../generic/GenericEmptyTab';

type ThisProps = {
  navigation: any;
};

export default function EmptyCartTab(props: ThisProps): JSX.Element {
  const navigateToCartScreen = () => {
    props.navigation.navigate('HomeStacks');
  };

  return (
    <GenericEmptyTab
      onPressButton={navigateToCartScreen}
      imageSource={images.EMPTY_CART}
      title={'Cart empty'}
      body={'Go ahead and order some tasty food'}
      buttonTitle={'Add item'}
      isDisplayButton={true}
    />
  );
}
