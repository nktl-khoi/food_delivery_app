import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../../../styles/colors';
import {TextLink} from '../../../components/texts/TextLink';
import HorizontalListFood from '../../../components/displays/HorizontalListFood';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {GET_LIMIT_FAVOURITE_OF_USER} from '../AccountQuery';
import {useQuery} from '@apollo/client';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  userId: string;
  navigation: any;
};

export default function MyFavoriteDisplay(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_LIMIT_FAVOURITE_OF_USER, {
    variables: {
      userId: props.userId,
      takeNum: 10,
    },
  });

  const navigateToFavoriteScreen = () => {
    props.navigation.navigate('FavoriteScreen', {
      userId: props.userId,
    });
  };

  useFocusEffect(() => {
    refetch();
  });

  return (
    <>
      {data?.getLimitFavouriteProductsOfUser?.length > 0 && (
        <View style={styles.container}>
          <View style={styles.title}>
            <ItemTitleText>My favorite foods</ItemTitleText>
            <TextLink onPress={navigateToFavoriteScreen}>View all</TextLink>
          </View>

          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <HorizontalListFood
              data={data?.getLimitFavouriteProductsOfUser}
              navigation={props.navigation}
            />
          )}
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
    gap: 12,
  },
  title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
