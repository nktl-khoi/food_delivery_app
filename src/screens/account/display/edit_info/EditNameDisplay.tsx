import GenericBasicInfoEditItem from '../../generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function EditNameDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Name'}
      placeHolder={'Enter your name'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'drive-file-rename-outline'}
      iconType={'material'}
    />
  );
}
