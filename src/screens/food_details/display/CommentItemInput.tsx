import GenericBasicInfoEditItem from '../../../screens/account/generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function CommentItemInput(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Comment'}
      placeHolder={'Enter your comment'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'description'}
      iconType={'material'}
    />
  );
}
