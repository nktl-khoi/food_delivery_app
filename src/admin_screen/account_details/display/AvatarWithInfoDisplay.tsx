import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {ItemSectionText} from '../../../components/texts/ItemSectionText';
import BasicInfoDisplay from '../../../screens/account/display/basic_info/BasicInfoDisplay';
import colors from '../../../styles/colors';

type ThisProps = {
  avatarUri: string;
  name: string;
  phoneNumber: string;
  address: string;
  email?: string;
};

export default function AvatarWithInfoDisplay(props: ThisProps): JSX.Element {
  return (
    <View>
      <View style={styles.imageAndName}>
        <Avatar
          source={{
            uri: props.avatarUri
              ? props.avatarUri
              : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
          }}
          size={120}
          avatarStyle={{borderRadius: 90}}
        />
        <ItemSectionText>{props.name}</ItemSectionText>
      </View>

      <BasicInfoDisplay
        containerStyle={styles.info}
        phone={props.phoneNumber}
        address={props.address}
        email={props.email}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageAndName: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    backgroundColor: colors.lightGrey,
  },
});
