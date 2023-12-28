import {Image} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {OnPressItem} from '../../../types/GenericType';
import FavoriteButton from '../../../components/buttons/FavoriteButton';

type ThisProps = {
  isFavorite: boolean;
  imageUri: string;
  onPressFavoriteButton: OnPressItem;
};

export default function ImageFoodDetailsDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: props.imageUri}}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}>
        <FavoriteButton
          isFavorite={props.isFavorite}
          iconSize={40}
          onPressItem={props.onPressFavoriteButton}
        />
      </Image>
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
