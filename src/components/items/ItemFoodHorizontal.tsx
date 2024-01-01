import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../components/texts/ItemSubtitleText';
import colors from '../../styles/colors';
import ItemImageFood from './ItemImageFood';
import {pressableRippleConfig} from '../../styles/pressable_config';
import {PriceText} from '../texts/PriceText';
import {FoodListItemType} from '../../types/ItemType';
import display from '../../utils/display';
import {Icon} from '@rneui/themed';
import {OnPressItem} from '../../types/GenericType';
import AverageRatingScoreDisplay from '../../screens/food_details/display/AverageRatingScoreDisplay';

type ThisProps = FoodListItemType & {
  onPressItem: OnPressItem;
};

export default function ItemFoodHorizontal(props: ThisProps): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri}
        imageWidth={display.setWidth(45)}
        imageHeight={display.setHeight(15)}
      />
      <View style={styles.info_container}>
        <View style={styles.name_and_rating}>
          <ItemTitleText style={styles.text}>{props.title}</ItemTitleText>
          <AverageRatingScoreDisplay
            productId={props.id}
            isShowCount={false}
            size={12}
          />
        </View>

        <ItemSubtitleText style={styles.text}>
          {props.shopName}
        </ItemSubtitleText>
        <View style={styles.price_and_button}>
          <PriceText textSize={12} priceValue={props.fullPrice} />
          <View style={styles.buttonAddToCart}>
            <Icon
              type="material-community"
              name="cart-outline"
              size={20}
              color={colors.white}
            />
          </View>
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
