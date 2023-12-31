import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Image} from '@rneui/themed';
import images from '../../styles/images';
import display from '../../utils/display';
import colors from '../../styles/colors';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../components/texts/ItemSubtitleText';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CompleteOrderScreen(props: ThisProps): JSX.Element {
  const navigateToCartScreen = () => {
    props.navigation.navigate('CartScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={images.COMPLETE} style={styles.image} />
      <View style={styles.text}>
        <ItemTitleText style={{fontSize: 24}}>
          Thank you for ordering!
        </ItemTitleText>
        <ItemSubtitleText style={{fontSize: 16}}>
          Your order was placed. It will be started as soon as possible.
        </ItemSubtitleText>
      </View>
      <View>
        <Button onPress={navigateToCartScreen} buttonStyle={styles.button}>
          CONTINUE SHOPPING
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    gap: 20,
  },
  button: {
    paddingHorizontal: 28,
    paddingVertical: 12,
    backgroundColor: colors.green,
  },
  text: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: display.setWidth(40),
    width: display.setWidth(40),
  },
});
