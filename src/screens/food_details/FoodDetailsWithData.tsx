import {Button} from '@rneui/themed';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import colors from '../../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import ImageFoodDetailsDisplay from './display/ImageFoodDetailsDisplay';
import PriceAndAmountDisplay from './display/PriceAndAmountDisplay';
import ItemVendorDisplay from './display/ItemVendorDisplay';
import ListSizeFoodDisplay from './display/ListSizeFoodDisplay';
import ListTagFoodDisplay from './display/ListTagFoodDisplay';
import {BigTitleText} from '../../components/texts/BigTitleText';
import RatingText from '../../components/texts/RatingText';
import {useMutation} from '@apollo/client';
import {ADD_PRODUCT_TO_CART} from './FoodDetailsQuery';
import Snackbar from 'react-native-snackbar';

type ThisProps = {
  data: any;
  navigation: any;
  userId: string;
};

export default function FoodDetailsWithData(props: ThisProps): JSX.Element {
  const [addProductToCart, {loading, error, data}] =
    useMutation(ADD_PRODUCT_TO_CART);

  const [isFavorite, setFavorite] = useState<boolean>(true);
  const [amount, setAmount] = useState(1);
  const [chosen, setChosen] = useState('');
  const [fullPrice, setFullPrice] = useState(
    props.data.getProductById.fullPrice,
  );

  const addToFavoriteFood = () => {
    console.log('CALL API: add to favorite 3');
    setFavorite(!isFavorite);
  };

  const addToCart = async () => {
    console.log('Amount: ', amount);
    console.log('Size: ', chosen);
    console.log('Full price: ', fullPrice);
    console.log(props.userId);
    if (chosen === null) console.log('please chose size');
    await addProductToCart({
      variables: {
        productSizeId: chosen,
        userId: props.userId,
        amount: amount,
        fullPrice: fullPrice * amount,
      },
    }).then(() => {
      Snackbar.show({text: 'Item added to cart!'});
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageFoodDetailsDisplay
        isFavorite={isFavorite}
        imageUri={props.data.getProductById.imageUri}
        onPressFavoriteButton={addToFavoriteFood}
      />

      <ScrollView
        style={styles.mainInfoContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}>
        <BigTitleText>{props.data.getProductById.title}</BigTitleText>
        <PriceAndAmountDisplay
          price={fullPrice}
          amount={amount}
          setAmount={setAmount}
        />
        <ItemVendorDisplay
          shopName={
            props.data.getProductById.productSubcategory.productCategory.shop
              .shopName
          }
          shopId={
            props.data.getProductById.productSubcategory.productCategory.shop.id
          }
          textStyle={{fontSize: 16}}
          navigation={props.navigation}
        />

        {props.data.getProductById.ProductSize.length > 0 ? (
          <View>
            <SectionText style={{fontSize: 16}}>Size</SectionText>
            <ListSizeFoodDisplay
              chosen={chosen}
              setChosen={setChosen}
              setFullPrice={setFullPrice}
              data={props.data.getProductById.ProductSize}
            />
          </View>
        ) : (
          <View></View>
        )}

        {props.data.getProductById.ProductTag.length > 0 ? (
          <View>
            <SectionText style={{fontSize: 16}}>Tag</SectionText>
            <ListTagFoodDisplay data={props.data.getProductById.ProductTag} />
          </View>
        ) : (
          <View></View>
        )}

        <View style={styles.ratings}>
          <RatingText ratingScore={4.5} size={16} />
          <GenericText style={{fontSize: 16}}>1000 ratings</GenericText>
        </View>

        <View>
          <SectionText style={{fontSize: 16}}>Description</SectionText>
          <GenericText>{props.data.getProductById.description}</GenericText>
        </View>

        {loading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <Button buttonStyle={styles.buttonAddToCart} onPress={addToCart}>
            ADD TO CART
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    marginTop: -20,
    flex: 1,
  },
  contentContainer: {
    gap: 12,
    paddingVertical: 32,
    paddingHorizontal: 28,
  },
  buttonAddToCart: {paddingVertical: 12},
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
