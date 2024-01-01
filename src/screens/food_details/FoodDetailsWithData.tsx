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
import {useMutation} from '@apollo/client';
import {ADD_PRODUCT_TO_CART} from './FoodDetailsQuery';
import Snackbar from 'react-native-snackbar';
import fonts from '../../styles/fonts';
import AverageRatingScoreDisplay from './display/AverageRatingScoreDisplay';

type ThisProps = {
  data: any;
  navigation: any;
  userId: string;
};

export default function FoodDetailsWithData(props: ThisProps): JSX.Element {
  const [addProductToCart, {loading, error, data}] =
    useMutation(ADD_PRODUCT_TO_CART);

  const [amount, setAmount] = useState(1);
  const [chosen, setChosen] = useState('');
  const [fullPrice, setFullPrice] = useState(
    props.data.getProductById.fullPrice,
  );

  const addToCart = async () => {
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

  const createReview = () => {
    props.navigation.navigate('ReviewFoodScreen', {
      userId: props.userId,
      productId: props.data.getProductById.id,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageFoodDetailsDisplay
        imageUri={props.data.getProductById.imageUri}
        userId={props.userId}
        productId={props.data.getProductById.id}
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

        <AverageRatingScoreDisplay
          productId={props.data.getProductById.id}
          isShowCount={true}
        />

        <View>
          <SectionText style={{fontSize: 16}}>Description</SectionText>
          <GenericText>{props.data.getProductById.description}</GenericText>
        </View>

        {loading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.titleButton}
            onPress={addToCart}>
            ADD TO CART
          </Button>
        )}

        <Button
          buttonStyle={styles.buttonCreateReview}
          titleStyle={styles.titleCreateReview}
          onPress={createReview}>
          VIEW REVIEW
        </Button>
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
  button: {paddingVertical: 12},
  titleButton: {fontFamily: fonts.POPPINS_BOLD},
  buttonCreateReview: {
    paddingVertical: 12,
    backgroundColor: colors.lightGrey,
  },
  titleCreateReview: {
    color: colors.darkBlack,
    fontFamily: fonts.POPPINS_BOLD,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
