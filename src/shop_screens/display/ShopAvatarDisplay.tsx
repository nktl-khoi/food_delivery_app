import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Icon} from '@rneui/themed';

import {GenericText} from '../../components/texts/generics/GenericText';
import {SectionText} from '../../components/texts/SectionText';
import colors from '../../styles/colors';
import {OnPressItem} from '../../types/GenericType';

type ThisProps = {
  avatarUri: string;
  shopName: string;
  shopPhoneNumber: string;
  canReport?: boolean;
  onPressReport?: OnPressItem;
};

export default function ShopAvatarDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.imageAndName}>
      <Avatar
        source={{
          uri: props.avatarUri
            ? props.avatarUri
            : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
        }}
        size={90}
        avatarStyle={{borderRadius: 12}}
      />
      <View style={{flex: 1}}>
        <SectionText>{props.shopName}</SectionText>
        <GenericText>Hotline: {props.shopPhoneNumber}</GenericText>
      </View>

      {props.canReport && (
        <Button
          onPress={props.onPressReport}
          buttonStyle={{backgroundColor: 'transparent'}}
          icon={
            <Icon type="material" name="report" size={36} color={colors.red} />
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageAndName: {
    flexDirection: 'row',
    gap: 20,
  },
});
