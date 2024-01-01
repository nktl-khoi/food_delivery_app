import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/themed';
import {useState} from 'react';
import {AirbnbRating} from '@rneui/themed';
import {useMutation} from '@apollo/client';
import Snackbar from 'react-native-snackbar';
import {CreateRatingProductInputType} from '../../../types/ItemType';
import {CREATE_RATING_PRODUCT} from '../FoodDetailsQuery';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import colors from '../../../styles/colors';
import CommentItemInput from './CommentItemInput';
import fonts from '../../../styles/fonts';
import {ErrorMessageText} from '../../../components/texts/ErrorMessageText';

type ThisProps = {
  productId: string;
  userId?: string;
  refetch: any;
};

export default function CommentInputAndPost(props: ThisProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [ratingScore, setRatingScore] = useState(3);
  const [createRatingProduct, {data, loading}] = useMutation(
    CREATE_RATING_PRODUCT,
  );

  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const post = async () => {
    if (comment === null || comment === '') {
      setDisplayError(true);
      setErrorMessage('Please enter your comment!');
      return;
    }

    setDisplayError(false);

    let input: CreateRatingProductInputType = {
      comment: comment,
      score: ratingScore,
      productId: props.productId,
      userId: props.userId ? props.userId : '',
    };
    await createRatingProduct({
      variables: {
        ratingInput: input,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: 'Your rating has created!'});
    });
  };

  const finishRating = (score: number) => {
    setRatingScore(score);
  };

  return (
    <View>
      <View style={styles.commentInput}>
        <ItemTitleText>Rating</ItemTitleText>
        <AirbnbRating
          count={5}
          showRating={false}
          defaultRating={ratingScore}
          size={20}
          selectedColor={colors.yellowStar}
          onFinishRating={finishRating}
        />
      </View>

      <View style={styles.commentInput}>
        <CommentItemInput value={comment} onChangedText={setComment} />
        {loading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.titleButton}
            onPress={post}>
            POST
          </Button>
        )}
      </View>
      {isDisplayError ? (
        <ErrorMessageText>{errorMessage}</ErrorMessageText>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    gap: 20,
  },
  commentInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    paddingVertical: 12,

    backgroundColor: colors.primary,
  },
  titleButton: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.POPPINS_MEDIUM,
  },
});
