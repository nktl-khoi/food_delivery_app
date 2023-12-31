import GenericBasicInfoItem from '../../generics/GenericBasicInfoItem';

type ThisProps = {
  birthday: string;
};

export default function ItemBirthdayDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoItem
      label={'Birthday'}
      value={props.birthday}
      iconName={'date-range'}
      iconType={'material'}
    />
  );
}
