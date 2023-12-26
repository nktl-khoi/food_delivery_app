import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import {Image} from '@rneui/themed';
import images from '../../../styles/images';

export default function ConnectWithFacebookButton(): JSX.Element {
  return (
    <TouchableOpacity style={styles.facebookButton}>
      <View style={styles.socialButtonsContainer}>
        <View style={styles.signInButtonLogoContainer}>
          <Image source={images.FACEBOOK} style={styles.signInButtonLogo} />
        </View>
        <Text style={styles.socialSignInButtonText}>Connect with Facebook</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: colors.facebookBlue,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInButtonLogoContainer: {
    backgroundColor: colors.white,
    padding: 2,
    borderRadius: 3,
    position: 'absolute',
    left: 25,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  socialSignInButtonText: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: fonts.POPPINS_MEDIUM,
  },
  signInButtonLogo: {
    height: 18,
    width: 18,
  },
});
