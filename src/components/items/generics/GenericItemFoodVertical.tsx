import {Pressable, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../texts/ItemTitleText';
import {ItemSubtitleText} from '../../texts/ItemSubtitleText';
import colors from '../../../styles/colors';
import ItemImageFood from '../ItemImageFood';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {PriceText} from '../../texts/PriceText';

import {OnPressItem} from '../../../types/GenericType';
import {FoodListItemType} from '../../../types/ItemType';
import fonts from '../../../styles/fonts';
import display from '../../../utils/display';
import RatingText from '../../texts/RatingText';
// import FavoriteButton from '../../buttons/FavoriteButton';

type ThisProps = FoodListItemType & {
  isFavorite: boolean;
  onPressFavoriteButton?: OnPressItem;
};

export default function GenericItemFoodVertical(props: ThisProps): JSX.Element {
  return (
    <Pressable
      style={styles.container}
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <ItemImageFood
        imageUri={props.imageUri}
        imageWidth={display.setWidth(30)}
        imageHeight={display.setHeight(15)}
      />
      <View style={styles.info_container}>
        <View style={styles.name_and_rating}>
          <ItemTitleText style={styles.text}>{props.title}</ItemTitleText>
          <RatingText ratingScore={props.averageRatingScores} />
        </View>
        <ItemSubtitleText style={{marginBottom: 4}}>
          {props.shopName}
        </ItemSubtitleText>
        <ItemSubtitleText numberOfLines={2} style={styles.description}>
          {props.description}
        </ItemSubtitleText>
        <View style={styles.price_and_button}>
          <PriceText priceValue={props.fullPrice} textSize={14} />
        </View>
      </View>

      {/* {props.isFavorite ? (
        <FavoriteButton
          isFavorite={true}
          onPressItem={() => props.onPressFavoriteButton}
        />
      ) : (
        <View></View>
      )} */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingEnd: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingVertical: 12,
  },
  buttonAddToCart: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  description: {
    fontFamily: fonts.POPPINS_EXTRA_LIGHT,
  },
  info_container: {
    flex: 1,
  },
  name_and_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: -8,
  },
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  add_button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  price_and_button: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
