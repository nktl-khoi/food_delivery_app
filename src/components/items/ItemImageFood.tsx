import {ActivityIndicator, StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import {Image} from '@rneui/themed';

type ThisProps = {
  imageWidth?: number;
  imageHeight?: number;
  imageUri: string;
};

export default function ItemImageFood(props: ThisProps): JSX.Element {
  return (
    <Image
      source={{
        uri: props.imageUri
          ? props.imageUri
          : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088164/Food_data/default/istockphoto-1354776457-612x612.jpg',
      }}
      containerStyle={[
        styles.image_item,
        {width: props.imageWidth, height: props.imageHeight},
      ]}
      PlaceholderContent={<ActivityIndicator />}></Image>
  );
}

const styles = StyleSheet.create({
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  rating_container: {
    flexDirection: 'row',
    gap: 4,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderBottomLeftRadius: 20,
  },
});
