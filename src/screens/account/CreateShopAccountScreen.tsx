import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {
  CreateShopAccountWithImageInputType,
  CreateShopInputType,
} from '../../types/ItemType';
import {CREATE_SHOP_ACCOUNT_WITH_IMAGE} from './AccountQuery';
import Snackbar from 'react-native-snackbar';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';
import GenericCreateShopScreen from './generics/GenericCreateShopScreen';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function CreateShopAccountScreen(props: ThisProps): JSX.Element {
  const [shopAddress, setShopAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [createShopAccountWithImage, {loading, data, error}] = useMutation(
    CREATE_SHOP_ACCOUNT_WITH_IMAGE,
  );

  const [userId, setUserId] = useState(props.route.params.user.userId);
  const [imageFile, setImageFile] = useState<Asset>();

  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const createShop = async () => {
    if (shopAddress === '' || phoneNumber === '' || shopName === '') {
      setErrorMessage('Fields cannot be empty!');
      setDisplayError(true);
      return;
    }
    if (imageFile) {
      try {
        const url = await uploadImageToCloudinary(imageFile!);
        let shop: CreateShopAccountWithImageInputType = {
          shopAddress: shopAddress,
          shopPhoneNumber: phoneNumber,
          shopName: shopName,
          imageUri: url,
          userId: userId,
        };
        await createShopAccountWithImage({
          variables: {
            shop: shop,
          },
        }).then(() => {
          Snackbar.show({text: 'Shop account created success'});
          props.navigation.goBack();
        });
      } catch (error) {
        console.log('EditAccountScreen: ', error);
      }
    } else {
      let shop: CreateShopInputType = {
        shopAddress: shopAddress,
        shopPhoneNumber: phoneNumber,
        shopName: shopName,
        imageUri: '',
        userId: userId,
      };
      await createShopAccountWithImage({
        variables: {
          shop: shop,
        },
      }).then(() => {
        Snackbar.show({text: 'Shop account created success'});
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

  return (
    <GenericCreateShopScreen
      imageUri={imageUri}
      email={props.route.params.user.email}
      onPressImage={onPressImage}
      shopName={shopName}
      setShopName={setShopName}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      shopAddress={shopAddress}
      setShopAddress={setShopAddress}
      isDisplayError={isDisplayError}
      errorMessage={errorMessage}
      loading={loading}
      navigation={props.navigation}
      onSaveAction={createShop}
    />
  );
}
