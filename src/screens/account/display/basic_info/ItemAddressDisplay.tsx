import GenericBasicInfoItem from '../../generics/GenericBasicInfoItem';

type ThisProps = {
  address: string;
};

export default function ItemAddressDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoItem
      label={'Address'}
      value={props.address}
      iconName={'location-on'}
      iconType={'material'}
    />
  );
}
