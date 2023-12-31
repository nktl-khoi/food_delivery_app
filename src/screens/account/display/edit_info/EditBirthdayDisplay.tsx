import GenericBasicInfoEditItem from '../../generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function EditBirthdayDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Birthday'}
      placeHolder={'Select your birthday'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'date-range'}
      iconType={'material'}
    />
  );
}
