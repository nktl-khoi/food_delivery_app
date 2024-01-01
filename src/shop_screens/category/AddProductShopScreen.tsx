import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {TextLink} from '../../components/texts/TextLink';
import ProductNameInputDisplay from './display/ProductNameInputDisplay';
import ProductPriceInputDisplay from './display/ProductPriceInputDisplay';
import ProductSizeInputDisplay from './display/ProductSizeInputDisplay';
import ProductDescriptionInputDisplay from './display/ProductDescriptionInputDisplay';
import {useState} from 'react';
import SaveCancelButton from '../../screens/account/display/SaveCancelButton';
import ProductAvatarDisplay from './display/ProductAvatarDisplay';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';
import {useMutation} from '@apollo/client';
import {CREATE_PRODUCT} from './ShopCategoryQuery';
import Snackbar from 'react-native-snackbar';
import {CreateProductInputType} from '../../types/ItemType';
import ListSubcategoryDisplay from './display/ListSubcategoryDisplay';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AddProductShopScreen(props: ThisProps): JSX.Element {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [imageFile, setImageFile] = useState<Asset>();
  const [createProduct, {data, loading}] = useMutation(CREATE_PRODUCT);
  const [chosenSubCategoryId, setChosenSubCategoryId] = useState('');

  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSave = async () => {
    if (
      productName === '' ||
      productName === null ||
      productPrice === '' ||
      productPrice === null ||
      productSize === '' ||
      productSize === null ||
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
        let input: CreateProductInputType = {
          title: productName,
          price: +productPrice,
          description: productDescription,
          imagePublicId: publicId,
          sizeTitle: productSize,
          subcategoryId: chosenSubCategoryId,
        };
        await createProduct({
          variables: {
            productInput: input,
          },
        }).then(() => {
          Snackbar.show({text: 'Product added success'});
          props.navigation.navigate('ShopCategoryScreen');
        });
      } catch (error) {
        console.log('ShopCategoryScreen: ', error);
      }
    } else {
      let input: CreateProductInputType = {
        title: productName,
        price: +productPrice,
        description: productDescription,
        imagePublicId: '',
        sizeTitle: productSize,
        subcategoryId: chosenSubCategoryId,
      };
      await createProduct({
        variables: {
          productInput: input,
        },
      }).then(() => {
        Snackbar.show({text: 'Product added success'});
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
      shopId: props.route.params.shopId,
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
          shopId={props.route.params.shopId}
          chosen={chosenSubCategoryId}
          setChosen={setChosenSubCategoryId}
        />
      </View>

      <ProductNameInputDisplay
        value={productName}
        onChangedText={setProductName}
      />

      <ProductPriceInputDisplay
        value={productPrice}
        onChangedText={setProductPrice}
      />

      <ProductSizeInputDisplay
        value={productSize}
        onChangedText={setProductSize}
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
