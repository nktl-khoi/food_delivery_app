import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import AvatarDisplay from './display/AvatarDisplay';
import BasicInfoEditDisplay from './display/edit_info/BasicInfoEditDisplay';
import {useState} from 'react';
import SaveCancelButton from './display/SaveCancelButton';
import {useMutation} from '@apollo/client';
import {UPDATE_USER_WITH_IMAGE} from './AccountQuery';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import {uploadImageToCloudinary} from '../../utils/updateImageToCloudinary';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function EditAccountScreen(props: ThisProps): JSX.Element {
  const [updateUserWithImage, {loading, error, data}] = useMutation(
    UPDATE_USER_WITH_IMAGE,
  );

  const [name, setName] = useState(props.route.params.user.name);
  const [phone, setPhone] = useState(props.route.params.user.phone);
  const [address, setAddress] = useState(props.route.params.user.address);
  const [email, setEmail] = useState(props.route.params.user.email);
  const [userId, setUserId] = useState(props.route.params.user.userId);
  const [imageUri, setImageUri] = useState(props.route.params.user.avatarUri);
  const [imageFile, setImageFile] = useState<Asset>();

  const onSave = async () => {
    if (imageFile) {
      try {
        const url = await uploadImageToCloudinary(imageFile!);

        console.log(url);
        await updateUserWithImage({
          variables: {
            userId: userId,
            name: name,
            phone: phone,
            address: address,
            imageUri: url,
          },
        }).then(() => {
          console.log('Update with image');
          Snackbar.show({text: 'Account updated success'});
          props.navigation.goBack();
        });
      } catch (error) {
        console.log('EditAccountScreen: ', error);
      }
    } else {
      await updateUserWithImage({
        variables: {
          userId: userId,
          name: name,
          phone: phone,
          address: address,
          imageUri: '',
        },
      }).then(() => {
        console.log('Update without image');
        Snackbar.show({text: 'Account updated success'});
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
        setImageUri(response.assets?.at(0)?.uri);
      }
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <AvatarDisplay
        avatarUri={imageUri}
        name={name}
        email={email}
        onPressImage={onPressImage}
        isEdit={true}
      />
      <BasicInfoEditDisplay
        name={name}
        onChangedName={setName}
        phone={phone}
        onChangedPhone={setPhone}
        address={address}
        onChangedAddress={setAddress}
      />
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
    paddingHorizontal: 28,
    paddingVertical: 20,
    gap: 20,
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {},
});
