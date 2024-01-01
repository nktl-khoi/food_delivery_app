import {Pressable, StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {SectionText} from '../../../components/texts/SectionText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {OnPressItem} from '../../../types/GenericType';
import {convertDateTo_HM_DMY} from '../../../utils/dateConvert';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import colors from '../../../styles/colors';

type ThisProps = {
  avatarUri: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  onPressItem: OnPressItem;
};

export default function GenericItemAccount(props: ThisProps): JSX.Element {
  const dateString = convertDateTo_HM_DMY(props.createdAt);
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <Avatar
        source={{
          uri: props.avatarUri
            ? props.avatarUri
            : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
        }}
        size={60}
        rounded
      />

      <View style={styles.info}>
        <SectionText>{props.name}</SectionText>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ItemSubtitleText>{props.email}</ItemSubtitleText>
          <ItemSubtitleText>Created at</ItemSubtitleText>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ItemSubtitleText>{props.phoneNumber}</ItemSubtitleText>
          <ItemSubtitleText>{dateString}</ItemSubtitleText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  info: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    flex: 1,
  },
});
