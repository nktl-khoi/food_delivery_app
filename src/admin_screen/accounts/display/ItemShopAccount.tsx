import {OnPressItem} from '../../../types/GenericType';
import {convertMillisecondsToDate} from '../../../utils/dateConvert';
import GenericItemAccount from '../generic/GenericItemAccount';

type ThisProps = {
  data: any;
  onPressItem: OnPressItem;
};

export default function ItemShopAccount(props: ThisProps): JSX.Element {
  const createAtDate = convertMillisecondsToDate(
    props.data.user.account.createdAt,
  );
  return (
    <GenericItemAccount
      avatarUri={props.data.imageUri}
      name={props.data.shopName}
      phoneNumber={props.data.shopPhoneNumber}
      email={props.data.user.account.email}
      createdAt={createAtDate}
      onPressItem={props.onPressItem}
    />
  );
}
