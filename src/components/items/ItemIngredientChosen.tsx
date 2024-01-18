import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {IngredientsType} from '../../types/ItemType';
import {ColorType, OnPressItem} from '../../types/GenericType';
import {pressableRippleConfig} from '../../styles/pressable_config';
import ItemImageFood from './ItemImageFood';
import display from '../../utils/display';
import {ItemTitleText} from '../texts/ItemTitleText';
import {PriceText} from '../texts/PriceText';
import colors from '../../styles/colors';
import {useState} from 'react';

type ThisProps = IngredientsType & {
  onPressItem: OnPressItem;
};

export default function ItemIngredientChosen(props: ThisProps): JSX.Element {
  const [selected, setSelected] = useState(false);

  const onPressItem = () => {
    setSelected(!selected);
    props.onPressItem(props.id);
  };

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: selected ? colors.primary : 'transparent'},
      ]}
      android_ripple={pressableRippleConfig}
      onPress={onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri}
        imageWidth={display.setWidth(30)}
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
