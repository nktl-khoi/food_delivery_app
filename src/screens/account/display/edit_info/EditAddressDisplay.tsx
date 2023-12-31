import GenericBasicInfoEditItem from '../../generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function EditAddressDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Address'}
      placeHolder={'Enter your address'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'location-on'}
      iconType={'material'}
    />
  );
}
