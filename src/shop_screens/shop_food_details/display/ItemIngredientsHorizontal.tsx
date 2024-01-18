import {Pressable, StyleSheet, View} from 'react-native';

import {OnPressItem} from '../../../types/GenericType';
import {IngredientsType} from '../../../types/ItemType';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import ItemImageFood from '../../../components/items/ItemImageFood';
import display from '../../../utils/display';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {PriceText} from '../../../components/texts/PriceText';
import colors from '../../../styles/colors';

type ThisProps = IngredientsType & {
  onPressItem: OnPressItem;
  isPressable: boolean;
};

export default function ItemIngredientsHorizontal(
  props: ThisProps,
): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}
      disabled={props.isPressable ? false : true}>
      <ItemImageFood
        imageUri={props.imageUri}
        imageWidth={display.setWidth(45)}
        imageHeight={display.setHeight(15)}
      />
      <View style={styles.info_container}>
        <View style={styles.name_and_rating}>
          <ItemTitleText style={styles.text}>{props.name}</ItemTitleText>
        </View>

        <View style={styles.price_and_button}>
          <PriceText textSize={12} priceValue={props.price} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    paddingBottom: 12,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  name_and_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: -8,
  },
  info_container: {
    width: '100%',
    paddingHorizontal: 4,
  },
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  price_and_button: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  price_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price_value: {
    color: colors.darkGrey,
  },
  price_currency: {
    color: colors.secondary,
  },
  buttonAddToCart: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
});
