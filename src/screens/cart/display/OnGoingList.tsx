import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import {ItemOngoingType} from '../../../types/ItemType';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemOnGoing from './ItemOnGoing';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function OnGoingList(props: ThisProps): JSX.Element {
  const memorizedValue = useCallback(
    ({item}: {item: ItemOngoingType}) => (
      <ItemOnGoing
        foodName={item.foodName}
        size={item.size}
        amount={item.amount}
        id={item.id}
        status={item.status}
        imageUri={item.imageUri}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
