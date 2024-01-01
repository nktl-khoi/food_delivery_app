import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';

import {useState} from 'react';
import SaveCancelButton from '../../screens/account/display/SaveCancelButton';
import {useMutation} from '@apollo/client';

import Snackbar from 'react-native-snackbar';
import {CreateTagInputType} from '../../types/ItemType';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import ProductNameInputDisplay from '../category/display/ProductNameInputDisplay';
import {CREATE_TAG} from './ShopFoodDetailQuery';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AddProductTagScreen(props: ThisProps): JSX.Element {
  const [productName, setProductName] = useState('');
  const [createTag, {data, loading}] = useMutation(CREATE_TAG);
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSave = async () => {
    if (productName === '' || productName === null) {
      setDisplayError(true);
      setErrorMessage('Fields cannot be empty!');
      return;
    }
    setDisplayError(false);
    let input: CreateTagInputType = {
      title: productName,
      productId: props.route.params.foodId,
    };
    await createTag({
      variables: {
        tagInput: input,
      },
    }).then(() => {
      Snackbar.show({text: 'Tag added success'});
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
