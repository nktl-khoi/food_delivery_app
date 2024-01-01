import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Icon, Input} from '@rneui/themed';

import {SafeAreaView} from 'react-native-safe-area-context';
import AvatarDisplay from '../display/AvatarDisplay';
import {ErrorMessageText} from '../../../components/texts/ErrorMessageText';
import colors from '../../../styles/colors';
import SaveCancelButton from '../display/SaveCancelButton';
import {OnPressItem} from '../../../types/GenericType';

type ThisProps = {
  imageUri: string;
  email: string;
  onPressImage: () => void;
  shopName: string;
  setShopName: (item: string) => void;
  phoneNumber: string;
  setPhoneNumber: (item: string) => void;
  shopAddress: string;
  setShopAddress: (item: string) => void;
  isDisplayError: boolean;
  errorMessage: string;
  loading: boolean;
  navigation: any;
  onSaveAction: OnPressItem;
};

export default function GenericCreateShopScreen(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AvatarDisplay
        avatarUri={props.imageUri}
        name={props.shopName}
        email={props.email}
        isEdit
        onPressImage={props.onPressImage}
      />
      <Input
        placeholder="Enter your shop name..."
        value={props.shopName}
        onChangeText={props.setShopName}
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
        value={props.phoneNumber}
        onChangeText={props.setPhoneNumber}
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
        value={props.shopAddress}
        onChangeText={props.setShopAddress}
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

      {props.isDisplayError ? (
        <ErrorMessageText>{props.errorMessage}</ErrorMessageText>
      ) : (
        <View></View>
      )}

      {props.loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <SaveCancelButton
          navigation={props.navigation}
          onPressSave={props.onSaveAction}
          title="SAVE"
        />
      )}
    </SafeAreaView>
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
