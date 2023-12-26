import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {Icon} from '@rneui/themed';
import {ItemScoreText} from './ItemScoreText';
import {ComponentStyle} from '../../types/GenericType';

type ThisProps = {
  ratingScore: number;
  textStyle?: ComponentStyle;
  size?: number;
};

export default function RatingText(props: ThisProps): JSX.Element {
  return (
    <View style={styles.rating_container}>
      <Icon
        size={props.size ? props.size : 12}
        color={colors.yellowStar}
        type="antdesign"
        style={{marginBottom: 4}}
        name="star"
      />
      <ItemScoreText
        style={[styles.text, props.textStyle, {fontSize: props.size}]}>
        {props.ratingScore}
      </ItemScoreText>
    </View>
  );
}

const styles = StyleSheet.create({
  rating_container: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.darkBlack,
    fontSize: 12,
  },
});
