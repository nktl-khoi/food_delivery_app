import GenericBasicInfoItem from '../../generics/GenericBasicInfoItem';

type ThisProps = {
  email: string;
};

export default function ItemEmailDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoItem
      label={'Email'}
      value={props.email}
      iconName={'email'}
      iconType={'material'}
    />
  );
}
