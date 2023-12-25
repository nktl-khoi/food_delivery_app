import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {ItemTitleText} from './ItemTitleText';

type ThisProps = {
  priceValue: number;
  textSize?: number;
};

export function PriceText(props: ThisProps): JSX.Element {
  return (
    <ItemTitleText
      style={[
        styles.price_value,
        {fontSize: props.textSize ? props.textSize : 16},
      ]}>
      {props.priceValue} VND
    </ItemTitleText>
  );
}

const styles = StyleSheet.create({
  price_container: {
    flexDirection: 'row',
    gap: 4,
  },
  price_value: {
    color: colors.yellowStar,
  },
});
