import GenericBasicInfoItem from '../../generics/GenericBasicInfoItem';

type ThisProps = {
  phone: string;
};

export default function ItemPhoneDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoItem
      label={'Phone number'}
      value={props.phone}
      iconName={'local-phone'}
      iconType={'material'}
    />
  );
}
