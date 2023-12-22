import {createTheme} from '@rneui/themed';
import colors from './colors';
import fonts from './fonts';

export const theme = createTheme({
  lightColors: {
    primary: '#fff',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
  components: {
    Button: {
      containerStyle: {},
      buttonStyle: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        padding: 0,
      },
      titleStyle: {
        color: colors.white,
      },
    },
    Input: {
      style: {},
      containerStyle: {
        backgroundColor: colors.lightGrey,
        paddingHorizontal: 20,
        paddingTop: 4,
        borderRadius: 12,
      },
      errorStyle: {},
      inputContainerStyle: {
        borderColor: 'transparent',
      },
      inputStyle: {
        color: colors.darkBlack,
        fontSize: 16,
      },
      labelStyle: {
        fontWeight: 'normal',
        color: colors.mediumGrey,
        fontSize: 12,
      },
      placeholderTextColor: colors.darkGrey,
      renderErrorMessage: false,
    },
    Tab: {
      indicatorStyle: {
        backgroundColor: colors.primary,
        height: 10,
        width: 10,
        borderRadius: 90,
        start: '16%',
      },
      buttonStyle: {
        paddingHorizontal: 0,
        paddingVertical: 4,
      },
    },
    TabItem: {
      titleStyle: active => ({
        fontSize: 16,
        color: active ? colors.primary : colors.darkBlack,
        fontFamily: fonts.POPPINS_MEDIUM,
      }),
    },
    Avatar: {
      source: {
        uri: 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
      },
    },
    Image: {
      source: {
        uri: 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088164/Food_data/default/istockphoto-1354776457-612x612.jpg',
      },
    },
  },
});
