import {OnPressItem} from '../../types/GenericType';
import AddAndSubtractGenericButton from './generics/AddAndSubtractGenericButton';

type ThisProps = {
  onPressItem: OnPressItem;
};

export default function AddButton(props: ThisProps): JSX.Element {
  return (
    <AddAndSubtractGenericButton
      onPress={props.onPressItem}
      name={'plus'}
      iconSize={8}
    />
  );
}
