import {View} from 'react-native';
import GenericBasicInfoEditItem from '../../generics/GenericBasicInfoEditItem';
import {ErrorMessageText} from '../../../../components/texts/ErrorMessageText';
import {useState} from 'react';
import {isValidPhone} from '../../../../utils/validate';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function EditPhoneDisplay(props: ThisProps): JSX.Element {
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangedText = (text: string) => {
    props.onChangedText(text);
    const phone = props.value;
    if (!isValidPhone(phone)) {
      setDisplayError(true);
      setErrorMessage('Invalid phone number');
    } else {
      setDisplayError(false);
      setErrorMessage('');
    }
  };
  return (
    <View>
      <GenericBasicInfoEditItem
        label={'Phone'}
        placeHolder={'Enter your phone'}
        value={props.value}
        onChangedText={onChangedText}
        iconName={'phone'}
        iconType={'font-awesome'}
        keyboardType="numeric"
      />
      {isDisplayError && <ErrorMessageText>{errorMessage}</ErrorMessageText>}
    </View>
  );
}
