import GenericEmptyTab from '../../../../screens/cart/tabs/generic/GenericEmptyTab';
import images from '../../../../styles/images';
import React from 'react';

type ThisProps = {};

export default function EmptyInComingTab(props: ThisProps): JSX.Element {
  return (
    <GenericEmptyTab
      imageSource={images.DELIVER}
      title={'Order empty'}
      body={'Add more food to service more customer'}
      isDisplayButton={false}
    />
  );
}
