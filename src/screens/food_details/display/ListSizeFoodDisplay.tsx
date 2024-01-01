import {ItemFoodSizeName} from '../../../types/ItemType';
import React from 'react';
import ListChosenDisplay from '../../../components/displays/ListChosenDisplay';

type ThisProps = {
  data: ArrayLike<ItemFoodSizeName>;
  chosen: string;
  setChosen: (item: string) => void;
  setFullPrice: (item: number) => void;
};

export default function ListSizeFoodDisplay(props: ThisProps): JSX.Element {
  const onPressItem = (item: ItemFoodSizeName, index: number) => {
    props.setFullPrice(item.fullPrice);
    props.setChosen(item.id);
  };

  return (
    <ListChosenDisplay
      data={props.data}
      chosen={props.chosen}
      setChosen={props.setChosen}
      onPressItem={onPressItem}
    />
  );
}
