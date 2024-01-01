import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import ProductNameInputDisplay from './display/ProductNameInputDisplay';
import ProductDescriptionInputDisplay from './display/ProductDescriptionInputDisplay';
import {useState} from 'react';
import SaveCancelButton from '../../screens/account/display/SaveCancelButton';
import {useMutation} from '@apollo/client';
import {CREATE_SUB_CATEGORY} from './ShopCategoryQuery';
import Snackbar from 'react-native-snackbar';
import {CreateProductSubCategoryInputType} from '../../types/ItemType';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AddSubCategoryScreen(props: ThisProps): JSX.Element {
  console.log('SHOP: ', props.route.params.shopId);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [createProductSubCategory, {data, loading}] =
    useMutation(CREATE_SUB_CATEGORY);
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSave = async () => {
    if (
      productName === '' ||
      productName === null ||
      productDescription === '' ||
      productDescription === null
    ) {
      setDisplayError(true);
      setErrorMessage('Fields cannot be empty!');
      return;
    }
    setDisplayError(false);
    let input: CreateProductSubCategoryInputType = {
      title: productName,
      description: productDescription,
      shopId: props.route.params.shopId,
    };
    await createProductSubCategory({
      variables: {
        subcategory: input,
      },
    }).then(() => {
      Snackbar.show({text: 'Subcategory added success'});
      props.navigation.goBack();
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      removeClippedSubviews={true}>
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
});
