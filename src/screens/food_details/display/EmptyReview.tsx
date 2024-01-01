import React from 'react';
import GenericEmptyTab from '../../cart/tabs/generic/GenericEmptyTab';
import images from '../../../styles/images';

type ThisProps = {};

export default function EmptyReview(props: ThisProps): JSX.Element {
  return (
    <GenericEmptyTab
      imageSource={images.RATING}
      title={'Reviews empty'}
      body={'There are no review here. Be the first one for this!'}
      isDisplayButton={false}
    />
  );
}
