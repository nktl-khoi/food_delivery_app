import {OnPressItem} from '../../../types/GenericType';
import {convertMillisecondsToDate} from '../../../utils/dateConvert';
import GenericItemAccount from '../generic/GenericItemAccount';

type ThisProps = {
  data: any;
  onPressItem: OnPressItem;
};

export default function ItemUserAccount(props: ThisProps): JSX.Element {
  const createAtDate = convertMillisecondsToDate(props.data.account.createdAt);
  return (
    <GenericItemAccount
      avatarUri={props.data.imageUrl}
      name={props.data.name}
      phoneNumber={props.data.phoneNumber}
      email={props.data.account.email}
      createdAt={createAtDate}
      onPressItem={props.onPressItem}
    />
  );
}
