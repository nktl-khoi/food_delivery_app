import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';

import {useState} from 'react';
import SaveCancelButton from '../../screens/account/display/SaveCancelButton';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import {CreateSizeInputType} from '../../types/ItemType';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import {CREATE_SIZE} from './ShopFoodDetailQuery';
import ProductNameInputDisplay from '../category/display/ProductNameInputDisplay';
import ProductPriceInputDisplay from '../category/display/ProductPriceInputDisplay';
import ListSizeFoodDisplay from '../../screens/food_details/display/ListSizeFoodDisplay';
import {ItemTitleText} from '../../components/texts/ItemTitleText';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AddProductSizeScreen(props: ThisProps): JSX.Element {
  console.log('SHOP: ', props.route.params.shopId);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [priceForSize, setPriceForSize] = useState(0);
  const [chosenSizeId, setChosenSizeId] = useState('');

  const [createProductSize, {data, loading}] = useMutation(CREATE_SIZE);
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSave = async () => {
    if (
      productName === '' ||
      productName === null ||
      productPrice === '' ||
      productPrice === null
    ) {
      setDisplayError(true);
      setErrorMessage('Fields cannot be empty!');
      return;
    }
    setDisplayError(false);
    let input: CreateSizeInputType = {
      title: productName,
      fullPrice: +productPrice,
      productId: props.route.params.foodId,
    };
    await createProductSize({
      variables: {
        sizeInput: input,
      },
    }).then(() => {
      Snackbar.show({text: 'New product size added success'});
      props.navigation.goBack();
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      removeClippedSubviews={true}>
      {props.route.params.sizes?.length > 0 ? (
        <View>
          <View style={styles.title}>
            <ItemTitleText style={{fontSize: 16}}>
              Size: {priceForSize} VND
            </ItemTitleText>
            {/* <TextLink style={styles.textLink} onPress={() => {}}>
              Edit size
            </TextLink> */}
          </View>

          <ListSizeFoodDisplay
            chosen={chosenSizeId}
            setChosen={setChosenSizeId}
            setFullPrice={setPriceForSize}
            data={props.route.params.sizes}
          />
        </View>
      ) : (
        <View></View>
      )}

      <ProductNameInputDisplay
        value={productName}
        onChangedText={setProductName}
      />

      <ProductPriceInputDisplay
        value={productPrice}
        onChangedText={setProductPrice}
      />

      {isDisplayError && <ErrorMessageText>{errorMessage}</ErrorMessageText>}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <SaveCancelButton navigation={props.navigation} onPressSave={onSave} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLink: {
    fontSize: 12,
  },
});
