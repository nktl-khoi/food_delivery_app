import {StyleSheet, View} from 'react-native';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {convertDateTo_HM_DMY} from '../../../utils/dateConvert';
import colors from '../../../styles/colors';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {NotiStatus} from '../../../types/constants';
import display from '../../../utils/display';
import MarkViewButtonDialog from './MarkViewButtonDialog';

type ThisProps = {
  id: string;
  title: string;
  message: string;
  updatedAt: Date;
  markStatus: NotiStatus;
  refetch: any;
};

export default function ItemNotification(props: ThisProps): JSX.Element {
  const dateString = convertDateTo_HM_DMY(props.updatedAt);
  return (
    <View style={styles.container}>
      <ItemTitleText>{props.title}</ItemTitleText>

      <View style={{flexDirection: 'row'}}>
        <ItemSubtitleText style={{flex: 1}}>{props.message}</ItemSubtitleText>
        <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
          <MarkViewButtonDialog
            notificationId={props.id}
            status={props.markStatus}
            refetch={props.refetch}
          />

          <ItemSubtitleText>Latest update</ItemSubtitleText>
          <ItemSubtitleText>{dateString}</ItemSubtitleText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
  },
  image: {
    height: display.setWidth(6),
    width: display.setWidth(6),
  },
});
