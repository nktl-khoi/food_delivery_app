import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import ItemImageFood from '../../../components/items/ItemImageFood';
import display from '../../../utils/display';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {ItemOngoingType} from '../../../types/ItemType';
import StatusDisplay from '../tabs/on_going/StatusDisplay';
import colors from '../../../styles/colors';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {OnPressItem} from '../../../types/GenericType';

type ThisProps = ItemOngoingType & {
  onPressItem: OnPressItem;
  listIngredients: {}[];
};

export default function ItemOnGoing(props: ThisProps): JSX.Element {
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

          <ItemSubtitleText style={{marginBottom: 4}}>
            Size: {props.size}
          </ItemSubtitleText>
          {props.listIngredients.map((item: any) => {
            return (
              <ItemSubtitleText key={item.productIngredient.name}>
                {item.productIngredient.name}
              </ItemSubtitleText>
            );
          })}
          <ItemSubtitleText>x{props.amount}</ItemSubtitleText>
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
    gap: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightGrey,
  },
  info_container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    marginBottom: -8,
  },
});
