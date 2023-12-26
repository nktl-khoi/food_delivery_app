import {StyleSheet, View} from 'react-native';
import {GenericText} from '../../../components/texts/generics/GenericText';
import {BigTitleText} from '../../../components/texts/BigTitleText';

export default function IntroductionSignUp(): JSX.Element {
  return (
    <View style={styles.container}>
      <BigTitleText style={styles.title}>Create Account</BigTitleText>
      <GenericText style={styles.content}>
        Enter your email and password for sign up.
      </GenericText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginTop: 40,
    marginBottom: 16,
  },
  content: {
    marginTop: 0,
  },
});
