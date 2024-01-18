import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import ItemImageFood from '../../../components/items/ItemImageFood';
import display from '../../../utils/display';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {PriceText} from '../../../components/texts/PriceText';
import {ItemHistoryOrderType} from '../../../types/ItemType';
import colors from '../../../styles/colors';
import {
  convertDateTo_HM_DMY,
  convertMillisecondsToDate,
} from '../../../utils/dateConvert';
import {OnPressItem} from '../../../types/GenericType';
import StatusDisplay from '../tabs/on_going/StatusDisplay';

type ThisProps = ItemHistoryOrderType & {
  onPressItem: OnPressItem;
  listIngredients: {}[];
};

export default function ItemHistoryOrder(props: ThisProps): JSX.Element {
  let date = convertMillisecondsToDate(props.date);
  let dateString = convertDateTo_HM_DMY(date);
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <View style={styles.container}>
        <ItemImageFood
          imageUri={props.imageUri}
          imageWidth={display.setWidth(20)}
          imageHeight={display.setHeight(10)}
        />
        <View style={styles.info_container}>
          <ItemTitleText style={styles.text}>{props.foodName}</ItemTitleText>

          <ItemSubtitleText>{dateString}</ItemSubtitleText>
          {props.listIngredients.map((item: any) => {
            return (
              <ItemSubtitleText key={item.productIngredient.name}>
                {item.productIngredient.name}
              </ItemSubtitleText>
            );
          })}
          <PriceText priceValue={props.priceValue} textSize={14} />
        </View>

        <StatusDisplay status={props.status} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingEnd: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
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
