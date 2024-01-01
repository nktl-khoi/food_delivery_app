import GenericEmptyTab from '../../../../screens/cart/tabs/generic/GenericEmptyTab';
import images from '../../../../styles/images';
import React from 'react';

type ThisProps = {};

export default function EmptyCompleteOrder(props: ThisProps): JSX.Element {
  return (
    <GenericEmptyTab
      imageSource={images.HISTORY_ORDER}
      title={'Order empty'}
      body={'There are no orders here'}
      isDisplayButton={false}
    />
  );
}
