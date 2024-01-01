import GenericBasicInfoEditItem from '../../../screens/account/generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function ProductDescriptionInputDisplay(
  props: ThisProps,
): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Description'}
      placeHolder={'Enter description'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'description'}
      iconType={'material'}
    />
  );
}
