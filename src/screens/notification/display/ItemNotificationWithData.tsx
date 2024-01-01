import {convertMillisecondsToDate} from '../../../utils/dateConvert';
import ItemNotification from './ItemNotification';

type ThisProps = {
  data: any;
  refetch: any;
};

export default function ItemNotificationWithData(
  props: ThisProps,
): JSX.Element {
  const updateAt = convertMillisecondsToDate(props.data.updatedAt);

  return (
    <ItemNotification
      title={props.data.title}
      message={props.data.message}
      updatedAt={updateAt}
      markStatus={props.data.status}
      id={props.data.id}
      refetch={props.refetch}
    />
  );
}
