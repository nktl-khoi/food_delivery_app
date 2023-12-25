import {Icon, Input} from '@rneui/themed';
import {OnChangeText} from '../../types/GenericType';
import colors from '../../styles/colors';
import {useState} from 'react';

type ThisProps = {
  value: string;
  onChangeText: OnChangeText;
  placeHolder: string;
};

export default function PasswordTextInput(props: ThisProps): JSX.Element {
  const [isPasswordShow, setPasswordShow] = useState(false);
  return (
    <Input
      placeholder={props.placeHolder}
      secureTextEntry={isPasswordShow ? false : true}
      value={props.value}
      onChangeText={props.onChangeText}
      leftIcon={
        <Icon name="lock" size={20} color={colors.darkBlack} type="feather" />
      }
      leftIconContainerStyle={{marginRight: 10}}
      rightIcon={
        <Icon
          name={isPasswordShow ? 'eye' : 'eye-off'}
          size={22}
          color={colors.darkBlack}
          style={{marginRight: 10}}
          onPress={() => setPasswordShow(!isPasswordShow)}
          type="feather"
        />
      }
    />
  );
}
