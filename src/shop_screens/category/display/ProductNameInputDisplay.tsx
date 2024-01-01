import GenericBasicInfoEditItem from '../../../screens/account/generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function ProductNameInputDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Name'}
      placeHolder={'Enter name'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'drive-file-rename-outline'}
      iconType={'material'}
    />
  );
}
