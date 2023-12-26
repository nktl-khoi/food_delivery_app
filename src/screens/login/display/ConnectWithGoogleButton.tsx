import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import {Image} from '@rneui/themed';
import images from '../../../styles/images';

export default function ConnectWithGoogleButton(): JSX.Element {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <View style={styles.socialButtonsContainer}>
        <View style={styles.signInButtonLogoContainer}>
          <Image source={images.GOOGLE} style={styles.signInButtonLogo} />
        </View>
        <Text style={styles.socialSignInButtonText}>Connect with Google</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: colors.googleBlue,
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
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
