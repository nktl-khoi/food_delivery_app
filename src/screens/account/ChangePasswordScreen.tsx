import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import SaveCancelButton from './display/SaveCancelButton';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import Snackbar from 'react-native-snackbar';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ChangePasswordScreen(props: ThisProps): JSX.Element {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const changePassword = async () => {
    if (
      currentPassword.length < 1 ||
      newPassword.length < 1 ||
      rePassword.length < 1
    ) {
      setErrorMessage('Fields cannot be empty!');
      setDisplayError(true);
      setLoading(false);
      return;
    } else if (newPassword !== rePassword) {
      setErrorMessage('Re enter password is incorrect!');
      setDisplayError(true);
      setLoading(false);
      return;
    }

    const auth = FIREBASE_AUTH;
    const user = auth.currentUser!;
    const email = props.route.params.userEmail;
    const credential = EmailAuthProvider.credential(email, currentPassword);

    setLoading(true);

    await reauthenticateWithCredential(user, credential)
      .then(async () => {
        // User re-authenticated.
        await updatePassword(user, newPassword)
          .then(() => {
            Snackbar.show({text: 'Your password update successful!'});
            props.navigation.goBack();
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage =
              error.code === 'auth/invalid-credential'
                ? 'Your current password is incorrect!'
                : error.message;
            setDisplayError(true);
            setErrorMessage(`${errorMessage}`);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage =
          error.code === 'auth/invalid-credential'
            ? 'Your current password is incorrect!'
            : error.message;

        setDisplayError(true);
        setErrorMessage(`${errorMessage}`);
      })
      .finally(() => {
        setLoading(false);
      });
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

      {displayError && (
        <ErrorMessageText style={{alignSelf: 'flex-start'}}>
          {errorMessage}
        </ErrorMessageText>
      )}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <SaveCancelButton
          navigation={props.navigation}
          onPressSave={changePassword}
        />
      )}
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
