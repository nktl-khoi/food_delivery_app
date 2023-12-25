import {Pressable} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {ComponentStyle, OnPressItem} from '../../../types/GenericType';
import {ItemTitleText} from '../ItemTitleText';

type ThisProps = {
  settingName: string;
  onPressItem: OnPressItem;
  textStyle?: ComponentStyle;
};

export default function GenericTextNavigationDisplay(
  props: ThisProps,
): JSX.Element {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemTitleText style={props.textStyle}>{props.settingName}</ItemTitleText>
    </Pressable>
  );
}
