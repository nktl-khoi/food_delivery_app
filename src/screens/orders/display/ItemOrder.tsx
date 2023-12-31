import React from 'react';
import {StyleSheet, View} from 'react-native';
import ItemImageFood from '../../../components/items/ItemImageFood';
import display from '../../../utils/display';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {PriceText} from '../../../components/texts/PriceText';
import colors from '../../../styles/colors';
import {ItemOrderType} from '../../../types/ItemType';

type ThisProps = ItemOrderType & {};

export default function ItemOrder(props: ThisProps): JSX.Element {
  return (
    <View>
      <View style={styles.container}>
        <ItemImageFood
          imageUri={props.imageUri}
          imageWidth={display.setWidth(20)}
          imageHeight={display.setHeight(10)}
        />
        <View style={styles.info_container}>
          <ItemTitleText style={styles.text}>{props.foodName}</ItemTitleText>

          <ItemSubtitleText style={{marginBottom: 4}}>
            Size: {props.size}
          </ItemSubtitleText>

          <PriceText priceValue={props.priceValue} textSize={14} />
        </View>

        <ItemTitleText>x{props.amount}</ItemTitleText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingEnd: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightGrey,
  },
  info_container: {
    flex: 1,
  },
  text: {
    marginBottom: -8,
  },
});
