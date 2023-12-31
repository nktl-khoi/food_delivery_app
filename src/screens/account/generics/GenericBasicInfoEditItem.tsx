import {Icon, Input} from '@rneui/themed';
import {KeyboardTypeOptions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

type ThisProps = {
  label: string;
  placeHolder: string;
  value: string;
  onChangedText: (text: string) => void;
  iconName: string;
  iconType: string;
  keyboardType?: KeyboardTypeOptions;
};

export default function GenericBasicInfoEditItem(
  props: ThisProps,
): JSX.Element {
  return (
    <Input
      label={props.label}
      placeholder={props.placeHolder}
      value={props.value}
      onChangeText={props.onChangedText}
      containerStyle={styles.input}
      keyboardType={props.keyboardType}
      leftIcon={
        <Icon
          name={props.iconName}
          type={props.iconType}
          size={28}
          color={colors.darkBlack}
        />
      }
      leftIconContainerStyle={{marginRight: 10}}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});
