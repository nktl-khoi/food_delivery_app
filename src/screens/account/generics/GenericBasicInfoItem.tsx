import {Icon} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import colors from '../../../styles/colors';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';

type ThisProps = {
  label: string;
  value: string;
  iconName: string;
  iconType: string;
};

export default function GenericBasicInfoItem(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon
        name={props.iconName}
        type={props.iconType}
        size={32}
        color={colors.darkBlack}
      />
      <View style={styles.text}>
        <ItemTitleText>{props.label}</ItemTitleText>
        <ItemSubtitleText>{props.value}</ItemSubtitleText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    flex: 1,
  },
});
