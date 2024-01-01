import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {TextLink} from '../../components/texts/TextLink';

import {useState} from 'react';
import SaveCancelButton from '../../screens/account/display/SaveCancelButton';

import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';

import {UpdateProductInputType} from '../../types/ItemType';

import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import ProductAvatarDisplay from '../category/display/ProductAvatarDisplay';
import ListSubcategoryDisplay from '../category/display/ListSubcategoryDisplay';
import ProductNameInputDisplay from '../category/display/ProductNameInputDisplay';
import ProductDescriptionInputDisplay from '../category/display/ProductDescriptionInputDisplay';
import ListTagFoodDisplay from '../../screens/food_details/display/ListTagFoodDisplay';
import {useMutation} from '@apollo/client';
import {UPDATE_PRODUCT} from './ShopFoodDetailQuery';
import Snackbar from 'react-native-snackbar';

type ThisProps = {
  data: any;
  navigation: any;
};

export default function EditProductWithData(props: ThisProps): JSX.Element {
  const [productName, setProductName] = useState(props.data.title);
  const [productPrice, setProductPrice] = useState(props.data.fullPrice);
  const [productSize, setProductSize] = useState('');
  const [productDescription, setProductDescription] = useState(
    props.data.description,
  );
  const [imageUri, setImageUri] = useState(props.data.imageUri);
  const [imageFile, setImageFile] = useState<Asset>();
  const [shopId, setShopId] = useState(
    props.data.productSubcategory.productCategory.shop.id,
  );
  const [chosenSubCategoryId, setChosenSubCategoryId] = useState('');

  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [updateProduct, {data, loading}] = useMutation(UPDATE_PRODUCT);

  const onSave = async () => {
    if (
      productName === '' ||
      productName === null ||
      productDescription === '' ||
      productDescription === null ||
      chosenSubCategoryId === '' ||
      chosenSubCategoryId === null ||
      imageUri === '' ||
      imageUri === null
    ) {
      setDisplayError(true);
      setErrorMessage('Fields cannot be empty!');
      return;
    }

    if (imageFile) {
      try {
        const publicId = await uploadImageToCloudinary(imageFile!);
        let input: UpdateProductInputType = {
          title: productName,
          description: productDescription,
          imagePublicId: publicId,
          subcategoryId: chosenSubCategoryId,
          productId: props.data.id,
        };
        await updateProduct({
          variables: {
            productInput: input,
          },
        }).then(() => {
          Snackbar.show({text: 'Product updated success'});
          props.navigation.goBack();
        });
      } catch (error) {
        console.log('ShopCategoryScreen: ', error);
      }
    } else {
      let input: UpdateProductInputType = {
        title: productName,
        description: productDescription,
        imagePublicId: '',
        subcategoryId: chosenSubCategoryId,
        productId: props.data.id,
      };
      await updateProduct({
        variables: {
          productInput: input,
        },
      }).then(() => {
        Snackbar.show({text: 'Product updated success'});
        props.navigation.goBack();
      });
    }
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

  const navigateToCreateSubCategoryScreen = () => {
    props.navigation.navigate('AddSubCategoryScreen', {
      shopId: shopId,
    });
  };

  const navigateToCreateSizeScreen = () => {
    props.navigation.navigate('AddProductSizeScreen', {
      foodId: props.data.id,
      sizes: props.data.ProductSize,
    });
  };

  const navigateToCreateTagScreen = () => {
    props.navigation.navigate('AddProductTagScreen', {
      foodId: props.data.id,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      removeClippedSubviews={false}>
      <View>
        <ItemTitleText>Choose product image</ItemTitleText>
        <ProductAvatarDisplay
          avatarUri={imageUri}
          onPressImage={onPressImage}
        />
      </View>

      <View>
        <View style={styles.title}>
          <ItemTitleText>Choose subcategory</ItemTitleText>
          <TextLink
            style={styles.textLink}
            onPress={navigateToCreateSubCategoryScreen}>
            Add new
          </TextLink>
        </View>

        <ListSubcategoryDisplay
          shopId={shopId}
          chosen={chosenSubCategoryId}
          setChosen={setChosenSubCategoryId}
        />
      </View>

      <View>
        <View style={styles.title}>
          <ItemTitleText>List sizes</ItemTitleText>
          <TextLink
            style={styles.textLink}
            onPress={navigateToCreateSizeScreen}>
            Add new
          </TextLink>
        </View>

        <ListTagFoodDisplay data={props.data.ProductSize} />
      </View>

      <View>
        <View style={styles.title}>
          <ItemTitleText>List tags</ItemTitleText>
          <TextLink style={styles.textLink} onPress={navigateToCreateTagScreen}>
            Add new
          </TextLink>
        </View>

        <ListTagFoodDisplay data={props.data.ProductTag} />
      </View>

      <ProductNameInputDisplay
        value={productName}
        onChangedText={setProductName}
      />

      <ProductDescriptionInputDisplay
        value={productDescription}
        onChangedText={setProductDescription}
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
