import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {
  UpdateShopAccountWithImageInputType,
  UpdateShopInputType,
} from '../../types/ItemType';
import Snackbar from 'react-native-snackbar';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';
import GenericCreateShopScreen from '../../screens/account/generics/GenericCreateShopScreen';
import {UPDATE_SHOP_ACCOUNT_WITH_IMAGE} from '../../screens/account/AccountQuery';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function EditShopAccountScreen(props: ThisProps): JSX.Element {
  const [shopAddress, setShopAddress] = useState(
    props.route.params.user.address,
  );
  const [phoneNumber, setPhoneNumber] = useState(props.route.params.user.phone);
  const [shopName, setShopName] = useState(props.route.params.user.name);
  const [imageUri, setImageUri] = useState(props.route.params.user.avatarUri);
  const [updateShopWithImage, {loading, data, error}] = useMutation(
    UPDATE_SHOP_ACCOUNT_WITH_IMAGE,
  );

  const [shopId, setShopId] = useState(props.route.params.user.shopId);
  const [imageFile, setImageFile] = useState<Asset>();

  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateShop = async () => {
    if (shopAddress === '' || phoneNumber === '' || shopName === '') {
      setErrorMessage('Fields cannot be empty!');
      setDisplayError(true);
      return;
    }
    if (imageFile) {
      try {
        const url = await uploadImageToCloudinary(imageFile!);
        let shop: UpdateShopAccountWithImageInputType = {
          shopAddress: shopAddress,
          shopPhoneNumber: phoneNumber,
          shopName: shopName,
          imageUri: url,
          shopId: shopId,
        };
        await updateShopWithImage({
          variables: {
            shop: shop,
          },
        }).then(() => {
          Snackbar.show({text: 'Shop account updated success'});
          props.navigation.goBack();
        });
      } catch (error) {
        console.log('EditAccountScreen: ', error);
      }
    } else {
      let shop: UpdateShopInputType = {
        shopAddress: shopAddress,
        shopPhoneNumber: phoneNumber,
        shopName: shopName,
        imagePublicId: '',
        shopId: shopId,
      };
      await updateShopWithImage({
        variables: {
          shop: shop,
        },
      }).then(() => {
        Snackbar.show({text: 'Shop account updated success'});
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
      onSaveAction={updateShop}
    />
  );
}
