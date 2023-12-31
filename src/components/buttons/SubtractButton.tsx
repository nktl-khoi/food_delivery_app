import {StyleSheet} from 'react-native';
import {ComponentStyle, OnPressItem} from '../../types/GenericType';
import AddAndSubtractGenericButton from './generics/AddAndSubtractGenericButton';
import colors from '../../styles/colors';

type ThisProps = {
  onPressItem: OnPressItem;
  buttonStyle?: ComponentStyle;
};

export default function SubtractButton(props: ThisProps): JSX.Element {
  return (
    <AddAndSubtractGenericButton
      onPress={props.onPressItem}
      buttonStyle={[styles.buttonStyle, props.buttonStyle]}
      name={'minus'}
      iconSize={8}
      iconColor={colors.darkBlack}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.white,
  },
});
