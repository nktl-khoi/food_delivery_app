import {StyleSheet} from 'react-native';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {ItemFoodSizeName} from '../../../types/ItemType';
import {GenericText} from '../../../components/texts/generics/GenericText';
import colors from '../../../styles/colors';
import React, {useCallback, useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import fonts from '../../../styles/fonts';

type ThisProps = {
  data: ArrayLike<ItemFoodSizeName>;
  chosen: string;
  setChosen: (item: string) => void;
  setFullPrice: (item: number) => void;
};

export default function ListSizeFoodDisplay(props: ThisProps): JSX.Element {
  const [indexChosen, setIndexChosen] = useState(0);

  useEffect(() => {
    const firstItem = props.data[0];
    props.setChosen(firstItem.id);
  }, []);

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <Pressable
        key={index}
        android_ripple={pressableRippleConfig}
        onPress={() => onPressItem(item, index)}>
        <GenericText
          style={[
            styles.mainInfoContainer,
            indexChosen === index ? styles.chosen : {},
          ]}>
          {item.title}
        </GenericText>
      </Pressable>
    ),
    [indexChosen],
  );

  const onPressItem = (item: ItemFoodSizeName, index: number) => {
    setIndexChosen(index);
    props.setFullPrice(item.fullPrice);
    props.setChosen(item.id);
  };

  return (
    <GenericFlatList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={memorizedValue}
    />
  );
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    backgroundColor: colors.third,
    color: colors.darkBlack,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  chosen: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontFamily: fonts.POPPINS_SEMI_BOLD,
  },
  contentContainer: {gap: 12},
});
