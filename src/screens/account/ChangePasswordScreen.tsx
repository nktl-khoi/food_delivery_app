import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {useState} from 'react';
import SaveCancelButton from './display/SaveCancelButton';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ChangePasswordScreen(props: ThisProps): JSX.Element {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const changePassword = () => {
    // if check current password && newPassword == rePassword
    // set newPassword
    console.log('current: ', currentPassword);
    console.log('newPassword: ', newPassword);
    console.log('rePassword: ', rePassword);
  };

  return (
    <View style={styles.container}>
      <PasswordTextInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeHolder="Enter your current password..."
      />
      <PasswordTextInput
        value={newPassword}
        onChangeText={setNewPassword}
        placeHolder="Enter your new password..."
      />
      <PasswordTextInput
        value={rePassword}
        onChangeText={setRePassword}
        placeHolder="Re-enter your new password..."
      />

      <SaveCancelButton
        navigation={props.navigation}
        onPressSave={changePassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
});
