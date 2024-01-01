import {Pressable, StyleSheet, View} from 'react-native';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {OnPressItem} from '../../../types/GenericType';
import {convertDateTo_HM_DMY} from '../../../utils/dateConvert';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import colors from '../../../styles/colors';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ReportStatus} from '../../../types/constants';
import {Image} from '@rneui/themed';
import display from '../../../utils/display';
import images from '../../../styles/images';

type ThisProps = {
  title: string;
  message: string;
  updatedAt: Date;
  markStatus?: ReportStatus;
  onPressItem: OnPressItem;
};

export default function ItemReport(props: ThisProps): JSX.Element {
  const dateString = convertDateTo_HM_DMY(props.updatedAt);
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <View style={styles.info}>
        <View>
          <ItemTitleText>{props.title}</ItemTitleText>
          <ItemSubtitleText>{props.message}</ItemSubtitleText>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
          {props.markStatus === ReportStatus.READ && (
            <Image
              style={styles.image}
              source={images.COMPLETE}
              resizeMode="contain"
            />
          )}

          {props.markStatus === ReportStatus.UN_READ && (
            <Image
              style={styles.image}
              source={images.BANNED}
              resizeMode="contain"
            />
          )}

          <ItemSubtitleText>Latest update</ItemSubtitleText>
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    height: display.setWidth(6),
    width: display.setWidth(6),
  },
});
