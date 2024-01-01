import {ActivityIndicator, StyleSheet, View} from 'react-native';
import FavoriteVerticalListFood from './display/FavoriteVerticalListFood';
import {SectionText} from '../../components/texts/SectionText';
import {useQuery} from '@apollo/client';
import {GET_FAVOURITE_OF_USER} from './AccountQuery';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function FavoriteScreen(props: ThisProps): JSX.Element {
  const userId = props.route.params.userId;
  const {data, loading, refetch} = useQuery(GET_FAVOURITE_OF_USER, {
    variables: {
      userId: userId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <FavoriteVerticalListFood
          data={data.getFavouriteProductsOfUser}
          navigation={props.navigation}
          userId={userId}
          refetch={refetch}
          listHeaderComponent={<SectionText>All favorite foods</SectionText>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
