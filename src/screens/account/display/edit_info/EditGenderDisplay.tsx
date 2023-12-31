import GenericBasicInfoEditItem from '../../generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function EditGenderDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Gender'}
      placeHolder={'Select your gender'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'account-group'}
      iconType={'material-community'}
    />
  );
}
