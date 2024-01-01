import {Icon, Input} from '@rneui/themed';
import {OnChangeText} from '../../types/GenericType';
import colors from '../../styles/colors';

type ThisProps = {
  value: string;
  onChangeText: OnChangeText;
};

export default function EmailTextInput(props: ThisProps): JSX.Element {
  return (
    <Input
      placeholder="Email"
      value={props.value}
      onChangeText={props.onChangeText}
      leftIcon={
        <Icon name="user" size={20} color={colors.darkBlack} type="feather" />
      }
      leftIconContainerStyle={{marginRight: 10}}
    />
  );
}
