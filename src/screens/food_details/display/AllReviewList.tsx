import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import ReviewItem from './ReviewItem';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {ComponentStyle, ItemComponent} from '../../../types/GenericType';
import {convertMillisecondsToDate} from '../../../utils/dateConvert';

type ThisProps = {
  data: ArrayLike<any>;
  listHeaderComponent?: ItemComponent | any;
  listFooterComponent?: ItemComponent | any;
  contentContainerStyle?: ComponentStyle;
  renderItem?: any;
};

export default function AllReviewList(props: ThisProps): JSX.Element {
  console.log(props.data);
  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ReviewItem
        key={item.index}
        avatarUri={item.user.imageUrl}
        name={item.user.name}
        ratingScore={item.score}
        comment={item.comment}
        date={convertMillisecondsToDate(item.updatedAt)}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={props.renderItem ? props.renderItem : memorizedValue}
      contentContainerStyle={[styles.container, props.contentContainerStyle]}
      ListHeaderComponent={props.listHeaderComponent}
      ListFooterComponent={props.listFooterComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
