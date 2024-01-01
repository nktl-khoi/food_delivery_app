import AvatarWithInfoDisplay from './AvatarWithInfoDisplay';

type ThisProps = {
  data: any;
};

export default function AvatarShopInfoDisplay(props: ThisProps): JSX.Element {
  return (
    <AvatarWithInfoDisplay
      avatarUri={props.data.imageUri}
      name={props.data.shopName}
      phoneNumber={props.data.shopPhoneNumber}
      address={props.data.shopAddress}
    />
  );
}
