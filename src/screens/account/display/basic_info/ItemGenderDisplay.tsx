import GenericBasicInfoItem from '../../generics/GenericBasicInfoItem';

type ThisProps = {
  gender: string;
};

export default function ItemGenderDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoItem
      label={'Gender'}
      value={props.gender}
      iconName={'account-group'}
      iconType={'material-community'}
    />
  );
}
