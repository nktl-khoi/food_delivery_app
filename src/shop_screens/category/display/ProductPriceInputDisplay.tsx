import GenericBasicInfoEditItem from '../../../screens/account/generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function ProductPriceInputDisplay(
  props: ThisProps,
): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Price'}
      placeHolder={'Enter price'}
      value={props.value}
      onChangedText={props.onChangedText}
      keyboardType={'numeric'}
      iconName={'price-change'}
      iconType={'material'}
    />
  );
}
