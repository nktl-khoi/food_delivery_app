import {Asset} from 'react-native-image-picker';
import {CLOUD_NAME, UPLOAD_PRESET} from '../storage/cloudinary';

export async function uploadImageToCloudinary(file: Asset): Promise<string> {
  const FETCH_URL =
    'https://api.cloudinary.com/v1_1/' + CLOUD_NAME + '/image/upload';

  console.log('API is : ' + FETCH_URL);

  let formData = new FormData();
  formData.append('upload_preset', UPLOAD_PRESET);

  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: file.fileName,
  });

  const response = await fetch(FETCH_URL, {
    method: 'post',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }).then(async response => {
    console.log(response);
    return response.json();
  });
  return response.secure_url;
}
