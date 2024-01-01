import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import ItemNotificationWithData from './ItemNotificationWithData';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  title: string;
  refetch: any;
};

export default function NotificationList(props: ThisProps): JSX.Element {
  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ItemNotificationWithData
        key={index}
        data={item}
        refetch={props.refetch}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<ItemTitleText>{props.title}</ItemTitleText>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
