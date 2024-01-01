import {StyleSheet, View} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_RATINGS_OF_A_PRODUCT} from './FoodDetailsQuery';
import CommentInputAndPost from './display/CommentInputAndPost';
import AllReviewList from './display/AllReviewList';
import {useFocusEffect} from '@react-navigation/native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import EmptyReview from './display/EmptyReview';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReviewFoodScreen(props: ThisProps): JSX.Element {
  const productId = props.route.params.productId;
  const userId = props.route.params.userId;

  const {data, loading, refetch} = useQuery(GET_RATINGS_OF_A_PRODUCT, {
    variables: {
      productId: productId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  return (
    <AllReviewList
      contentContainerStyle={styles.container}
      data={data?.getAllRatingOfProduct ? data.getAllRatingOfProduct : null}
      listHeaderComponent={
        <View style={{gap: 12}}>
          {userId !== null && userId != '' && (
            <CommentInputAndPost
              refetch={refetch}
              productId={productId}
              userId={userId}
            />
          )}

          <ItemTitleText>All reviews</ItemTitleText>
        </View>
      }
      listFooterComponent={
        <>
          {data === null || data?.getAllRatingOfProduct?.length <= 0 ? (
            <EmptyReview />
          ) : (
            <View></View>
          )}
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    gap: 20,
  },
});
