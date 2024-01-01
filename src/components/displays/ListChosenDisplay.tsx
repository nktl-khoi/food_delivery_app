import {StyleSheet} from 'react-native';

import React, {useCallback, useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {pressableRippleConfig} from '../../styles/pressable_config';
import {GenericText} from '../texts/generics/GenericText';
import GenericFlatList from './generics/GenericFlatList';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type ThisProps = {
  data: ArrayLike<any>;
  chosen: string;
  setChosen: (item: string) => void;
  onPressItem: (item: any, index: number) => void;
};

export default function ListChosenDisplay(props: ThisProps): JSX.Element {
  const [indexChosen, setIndexChosen] = useState(0);

  useEffect(() => {
    const firstItem = props.data[0];
    props.setChosen(firstItem.id);
  }, []);

  const onPressItem = (item: any, index: any) => {
    setIndexChosen(index);
    props.onPressItem(item, index);
  };

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
