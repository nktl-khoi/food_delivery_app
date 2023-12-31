import {Button, ButtonProps} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {OnPressItem} from '../../../types/GenericType';

type ThisProps = ButtonProps & {
  onPressItem: OnPressItem;
};

export default function GenericButton(props: ThisProps): JSX.Element {
  return (
    <Button
      containerStyle={[styles.button_containerStyle, props.containerStyle]}
      buttonStyle={[styles.button_buttonStyle, props.buttonStyle]}
      titleStyle={[styles.button_titleStyle, props.titleStyle]}
      onPress={props.onPressItem}
      {...props}>
      {props.children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button_containerStyle: {
    width: '100%',
  },
  button_buttonStyle: {height: 60},
  button_titleStyle: {fontSize: 16, fontWeight: 'bold'},
});
