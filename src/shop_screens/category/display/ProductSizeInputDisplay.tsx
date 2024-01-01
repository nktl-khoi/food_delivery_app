import GenericBasicInfoEditItem from '../../../screens/account/generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function ProductSizeInputDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Size'}
      placeHolder={'Enter size'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'size-xxl'}
      iconType={'material-community'}
    />
  );
}
