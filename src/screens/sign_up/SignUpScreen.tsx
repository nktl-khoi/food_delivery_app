import {ActivityIndicator, View} from 'react-native';
import {GenericText} from '../../components/texts/generics/GenericText';
import {TextLink} from '../../components/texts/TextLink';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import GenericButton from '../../components/buttons/generics/GenericButton';
import {gql, useMutation} from '@apollo/client';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import Snackbar from 'react-native-snackbar';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import EmailTextInput from '../../components/inputs/EmailTextInput';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import IntroductionSignUp from './display/IntroductionSignUp';

type ThisProps = {
  navigation: any;
  route: any;
};

const CREATE_USER_ACCOUNT = gql`
  mutation CreateUserAccount($email: String!, $firebaseUid: String!) {
    createUserAccount(email: $email, firebaseUID: $firebaseUid)
  }
`;

export default function SignUpScreen(props: ThisProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [createUserAccount, {loading, error, data}] =
    useMutation(CREATE_USER_ACCOUNT);

  const onPressButtonSignUp = async () => {
    if (email.length < 1 || password.length < 1 || reEnterPassword.length < 1) {
      setErrorMessage('Fields cannot be empty!');
      setDisplayError(true);
      return;
    } else if (password !== reEnterPassword) {
      setErrorMessage('Re enter password is incorrect!');
      setDisplayError(true);
      return;
    }

    const auth = FIREBASE_AUTH;
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {
          console.log(userCredential.user.uid);
          const userUID = userCredential.user.uid;
          await createUserAccount({
            variables: {
              email: email,
              firebaseUid: userUID,
            },
          })
            .then(() => {
              Snackbar.show({text: 'Account created success'});
              setDisplayError(false);
              navigateToLoginScreen();
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage =
                error.code === 'auth/invalid-credential'
                  ? 'Your email or password is incorrect!'
                  : error.message;

              setErrorMessage(`${errorMessage}`);
            });
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage =
            error.code === 'auth/invalid-credential'
              ? 'Your email or password is incorrect!'
              : error.message;

          setErrorMessage(`${errorMessage}`);
        });
    } finally {
    }
  };

  const navigateToLoginScreen = async () => {
    props.navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <IntroductionSignUp />
      <View style={styles.textContainer}>
        <GenericText>Already have an account, </GenericText>
        <TextLink onPressItem={navigateToLoginScreen}>log in</TextLink>
      </View>
      <EmailTextInput value={email} onChangeText={setEmail} />
      <PasswordTextInput
        value={password}
        onChangeText={setPassword}
        placeHolder="Password"
      />
      <PasswordTextInput
        value={reEnterPassword}
        onChangeText={setReEnterPassword}
        placeHolder="Re-enter password"
      />

      {displayError && (
        <ErrorMessageText style={{alignSelf: 'flex-start'}}>
          {errorMessage}
        </ErrorMessageText>
      )}

      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <GenericButton onPressItem={onPressButtonSignUp}>
          CREATE ACCOUNT
        </GenericButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: '100%',
  },
});
