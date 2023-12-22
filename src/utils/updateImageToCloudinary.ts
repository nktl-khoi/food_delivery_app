import {Asset} from 'react-native-image-picker';

export async function uploadImageToCloudinary(file: Asset): Promise<string> {
  const VAR_CLOUD_NAME = 'dxz5uumy7';
  const VAR_UNSIGNED_UPLOAD_PRESET = 'aosdf2uq';
  const VAR_RESOURCE_TYPE = 'image';
  const VAR_DELIVERY_TYPE = 'upload';

  const FETCH_URL =
    'https://api.cloudinary.com/v1_1/' +
    VAR_CLOUD_NAME +
    '/' +
    VAR_RESOURCE_TYPE +
    '/upload';

  console.log('API is : ' + FETCH_URL);

  let formData = new FormData();

  // formData.append('file', file);
  formData.append('cloud_name', VAR_CLOUD_NAME);
  formData.append('upload_preset', VAR_UNSIGNED_UPLOAD_PRESET);
  formData.append('resource_type', VAR_RESOURCE_TYPE);
  formData.append('delivery_type', VAR_DELIVERY_TYPE);
  formData.append(
    'public_id',
    new Date().getMilliseconds().toString() + file.fileName,
  );
  formData.append('api_key', 272626169313357);
  formData.append('api_secret', 'qiUMjEzYF3_fq7j7OqcxYoVTXOk');

  formData.append('file', {
    uri: file.uri,
    type: file.type,
    name: file.fileName,
  });

  let public_id = '';
  const response = await fetch(FETCH_URL, {
    method: 'post',
    //mode: 'cors',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      //'Content-Type': 'image/jpeg',
    },
  })
    .then(async response => {
      return response.json();
    })
    .then(async (data: any) => {
      console.log('DATA: ', data);

      console.log(typeof data);
      public_id = data.public_id;
      return data.status;
    })
    .then(async status => {
      console.log(status);
    })
    .finally(async () => {
      return public_id;
    })
    .catch(error => console.log(error));
  return public_id;
}
