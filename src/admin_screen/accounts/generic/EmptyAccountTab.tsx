import React from 'react';
import GenericEmptyTab from '../../../screens/cart/tabs/generic/GenericEmptyTab';
import images from '../../../styles/images';

type ThisProps = {};

export default function EmptyAccountTab(props: ThisProps): JSX.Element {
  return (
    <GenericEmptyTab
      imageSource={images.USER_NOT_FOUND}
      title={'Empty'}
      body={'There are nothing here!'}
      isDisplayButton={false}
    />
  );
}
