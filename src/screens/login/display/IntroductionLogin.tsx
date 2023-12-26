import {StyleSheet, View} from 'react-native';
import {GenericText} from '../../../components/texts/generics/GenericText';
import {BigTitleText} from '../../../components/texts/BigTitleText';

export default function IntroductionLogin(): JSX.Element {
  return (
    <View style={styles.container}>
      <BigTitleText style={styles.title}>Welcome</BigTitleText>
      <GenericText style={styles.content}>
        Enter your email and password, and enjoy ordering food
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
    marginBottom: 8,
  },
  content: {
    marginTop: 0,
    marginBottom: 20,
  },
});
