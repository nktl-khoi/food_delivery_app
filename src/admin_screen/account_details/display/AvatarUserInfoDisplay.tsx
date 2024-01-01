import AvatarWithInfoDisplay from './AvatarWithInfoDisplay';

type ThisProps = {
  data: any;
  email: string;
};

export default function AvatarUserInfoDisplay(props: ThisProps): JSX.Element {
  return (
    <AvatarWithInfoDisplay
      avatarUri={props.data.imageUrl}
      name={props.data.name}
      phoneNumber={props.data.phoneNumber}
      address={props.data.defaultAddress}
      email={props.email}
    />
  );
}
