import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ItemPhoneDisplay from './ItemPhoneDisplay';
import ItemAddressDisplay from './ItemAddressDisplay';
import colors from '../../../../styles/colors';
import {ItemTitleText} from '../../../../components/texts/ItemTitleText';
import {ComponentStyle} from '../../../../types/GenericType';
import ItemEmailDisplay from './ItemEmailDisplay';

type ThisProps = {
  phone: string;
  address: string;
  containerStyle?: ComponentStyle;
  email?: string;
};

export default function BasicInfoDisplay(props: ThisProps): JSX.Element {
  if (props.phone === null || props.address === null)
    return <ActivityIndicator size={'small'} />;
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View>
        <ItemTitleText>Contact</ItemTitleText>
        <ItemPhoneDisplay phone={props.phone} />
        {props.email && <ItemEmailDisplay email={props.email} />}
      </View>

      <View>
        <ItemTitleText>Address</ItemTitleText>
        <ItemAddressDisplay address={props.address} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
});
