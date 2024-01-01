import {ActivityIndicator, StyleSheet, View} from 'react-native';
import RatingText from '../../../components/texts/RatingText';
import {GenericText} from '../../../components/texts/generics/GenericText';
import {useQuery} from '@apollo/client';
import {GET_AVG_SCORE_OF_PRODUCT} from '../FoodDetailsQuery';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  productId: string;
  size?: number;
  isShowCount: boolean;
};

export default function AverageRatingScoreDisplay(
  props: ThisProps,
): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_AVG_SCORE_OF_PRODUCT, {
    variables: {
      productId: props.productId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) {
    return <ActivityIndicator size={'small'} />;
  }
  return (
    <View style={styles.ratings}>
      <RatingText
        ratingScore={data.getAverageScore?.avgRating}
        size={props.size ? props.size : 16}
      />
      {props.isShowCount && (
        <GenericText style={{fontSize: 16}}>
          {data.getAverageScore?.countRating} ratings
        </GenericText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
