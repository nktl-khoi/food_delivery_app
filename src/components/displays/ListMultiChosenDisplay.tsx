import {StyleSheet} from 'react-native';

import React, {useCallback, useEffect} from 'react';
import GenericFlatList from './generics/GenericFlatList';
import ItemIngredientChosen from '../items/ItemIngredientChosen';
import {CartIngredientsInputType} from '../../types/ItemType';

type ThisProps = {
  data: ArrayLike<any>;
  ingredientsSet: Set<CartIngredientsInputType>;
};

export default function ListMultiChosenDisplay(props: ThisProps): JSX.Element {
  useEffect(() => {}, []);

  const onPressItem = (item: any) => {
    if (props.ingredientsSet.has(item.id)) {
      props.ingredientsSet.delete(item.id);
    } else {
      props.ingredientsSet.add(item.id);
    }

    console.log('SET: ', props.ingredientsSet);
  };

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ItemIngredientChosen
        key={item.id}
        imageUri={item.imageUri}
        onPressItem={() => onPressItem(item)}
        id={item.id}
        price={item.price}
        name={item.name}
      />
    ),
    [],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      horizontal
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
});
