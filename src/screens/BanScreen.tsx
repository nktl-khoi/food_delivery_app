import React from 'react';
import GenericEmptyTab from './cart/tabs/generic/GenericEmptyTab';
import images from '../styles/images';
import ItemLogoutDisplay from './account/display/setting/ItemLogoutDisplay';

type ThisProps = {
  navigation: any;
  accountId: string;
};

export default function BanScreen(props: ThisProps): JSX.Element {
  return (
    <GenericEmptyTab
      imageSource={images.BANNED}
      title={'BANNED'}
      body={'Your account has been banned!'}
      isDisplayButton={true}
      buttonTitle={'View details'}
      onPressButton={() =>
        props.navigation.navigate('AllReportScreen', {
          accountId: props.accountId,
        })
      }
      secondButton={
        <ItemLogoutDisplay isButton navigation={props.navigation} />
      }
    />
  );
}
