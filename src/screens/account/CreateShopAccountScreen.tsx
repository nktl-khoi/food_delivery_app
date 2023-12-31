import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SaveCancelButton from './display/SaveCancelButton';
import colors from '../../styles/colors';
import {Icon, Input} from '@rneui/themed';

type ThisProps = {
  navigation: any;
};

export default function CreateShopAccountScreen(props: ThisProps): JSX.Element {
  const [shopAddress, setShopAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [imageUri, setImageUri] = useState('');

  const createShop = () => {};

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your shop name..."
        value={shopName}
        onChangeText={setShopName}
        leftIcon={
          <Icon
            name="drive-file-rename-outline"
            size={20}
            color={colors.darkBlack}
            type="material"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
      />

      <Input
        placeholder="Enter your shop phone number..."
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        leftIcon={
          <Icon
            name="phone"
            size={20}
            color={colors.darkBlack}
            type="material"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
      />

      <Input
        value={shopAddress}
        onChangeText={setShopAddress}
        placeholder="Enter your shop address..."
        leftIcon={
          <Icon
            name="location-on"
            size={20}
            color={colors.darkBlack}
            type="material"
          />
        }
        leftIconContainerStyle={{marginRight: 10}}
      />

      <SaveCancelButton
        navigation={props.navigation}
        onPressSave={createShop}
        title="CREATE"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
});
