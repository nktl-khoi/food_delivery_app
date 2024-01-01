import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Icon} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SectionText} from '../../../components/texts/SectionText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import colors from '../../../styles/colors';

type ThisProps = {
  avatarUri: string;
  name: string;
  email: string;
  isEdit?: boolean;
  onPressImage?: () => void;
};

export default function AvatarDisplay(props: ThisProps): JSX.Element {
  return (
    <SafeAreaView style={styles.avatar}>
      <Avatar
        source={{
          uri: props.avatarUri
            ? props.avatarUri
            : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
        }}
        size={60}
        rounded
      />

      <View style={{flex: 1}}>
        <SectionText>{props.name}</SectionText>
        <ItemSubtitleText>{props.email}</ItemSubtitleText>
      </View>
      {props.isEdit && (
        <Button
          icon={
            <Icon
              name={'image'}
              type="font-awesome"
              color={colors.darkBlack}
              size={20}
            />
          }
          onPress={props.onPressImage}
          buttonStyle={{backgroundColor: 'transparent'}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
});
