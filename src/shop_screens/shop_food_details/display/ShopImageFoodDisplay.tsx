import {Image} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type ThisProps = {
  imageUri: string;
};

export default function ShopImageFoodDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: props.imageUri}}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 240,
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 32,
    paddingEnd: 12,
  },
});
