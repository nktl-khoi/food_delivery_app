import {Image} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {useQuery} from '@apollo/client';
import {CHECK_FAVOURITE} from '../../account/AccountQuery';
import {CreateFavouriteInputType} from '../../../types/ItemType';
import UnFavouriteButton from '../../../components/buttons/generics/UnFavouriteButton';
import FavouriteButton from '../../../components/buttons/generics/FavouriteButton';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  imageUri: string;
  userId: string;
  productId: string;
};

export default function ImageFoodDetailsDisplay(props: ThisProps): JSX.Element {
  const input: CreateFavouriteInputType = {
    userId: props.userId,
    productId: props.productId,
  };

  const {data, loading, refetch} = useQuery(CHECK_FAVOURITE, {
    variables: {
      favouriteInput: input,
    },
  });

  console.log('FAV', data);
  useFocusEffect(() => {
    refetch();
  });

  return (
    <View style={styles.imageContainer}>
      <Image
        source={{uri: props.imageUri}}
        containerStyle={styles.image}
        PlaceholderContent={<ActivityIndicator />}>
        {loading === false && (
          <View>
            {data?.checkFavouriteInput === true ? (
              <FavouriteButton
                userId={props.userId}
                productId={props.productId}
                refetch={refetch}
              />
            ) : (
              <UnFavouriteButton
                userId={props.userId}
                productId={props.productId}
                refetch={refetch}
              />
            )}
          </View>
        )}
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
