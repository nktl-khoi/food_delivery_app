import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import RatingText from '../../../components/texts/RatingText';
import {convertDateTo_HM_DMY} from '../../../utils/dateConvert';

type ThisProps = {
  avatarUri: string;
  name: string;
  ratingScore: number;
  comment: string;
  date: Date;
};

export default function ReviewItem(props: ThisProps): JSX.Element {
  const dateString = convertDateTo_HM_DMY(props.date);
  return (
    <View style={styles.container}>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ItemTitleText>{props.name}</ItemTitleText>
          <RatingText ratingScore={props.ratingScore}></RatingText>
        </View>
        <ItemSubtitleText>{props.comment}</ItemSubtitleText>

        <ItemSubtitleText>{dateString}</ItemSubtitleText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  info: {
    flex: 1,
  },
});
