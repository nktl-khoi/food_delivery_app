import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';

import {useState} from 'react';
import SaveCancelButton from '../../screens/account/display/SaveCancelButton';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import {AddProductIngredientsInputType} from '../../types/ItemType';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import ProductNameInputDisplay from '../category/display/ProductNameInputDisplay';
import {ADD_PRODUCT_INGREDIENTS} from './ShopFoodDetailQuery';
import ProductPriceInputDisplay from '../category/display/ProductPriceInputDisplay';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import ProductAvatarDisplay from '../category/display/ProductAvatarDisplay';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AddIngredientsScreen(props: ThisProps): JSX.Element {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [imageUri, setImageUri] = useState('');
  const [imageFile, setImageFile] = useState<Asset>();

  const [addProductIngredients, {data, loading}] = useMutation(
    ADD_PRODUCT_INGREDIENTS,
  );
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSave = async () => {
    if (
      name === '' ||
      name === null ||
      price === '' ||
      price === null ||
      imageUri === '' ||
      imageUri === null
    ) {
      setDisplayError(true);
      setErrorMessage('Fields cannot be empty!');
      return;
    }
    setDisplayError(false);
    const url = await uploadImageToCloudinary(imageFile!);
    let input: AddProductIngredientsInputType = {
      name: name,
      imageUri: url,
      price: +price,
      productId: props.route.params.productId,
    };
    await addProductIngredients({
      variables: {
        productIngredientsInput: input,
      },
    }).then(() => {
      Snackbar.show({text: 'Ingredients added success'});
      props.navigation.goBack();
    });
  };

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
  };

  const onPressImage = () => {
    launchImageLibrary(options, async response => {
      if (response?.assets) {
        setImageFile(response.assets?.at(0));
        setImageUri(response.assets?.at(0)?.uri!);
      }
    });
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      removeClippedSubviews={true}>
      <View>
        <ItemTitleText>Choose product image</ItemTitleText>
        <ProductAvatarDisplay
          avatarUri={imageUri}
          onPressImage={onPressImage}
        />
      </View>

      <ProductNameInputDisplay value={name} onChangedText={setName} />

      <ProductPriceInputDisplay value={price} onChangedText={setPrice} />

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
});
