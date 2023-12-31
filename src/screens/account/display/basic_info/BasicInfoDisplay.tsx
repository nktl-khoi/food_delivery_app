import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ItemPhoneDisplay from './ItemPhoneDisplay';
import ItemAddressDisplay from './ItemAddressDisplay';
import colors from '../../../../styles/colors';
import {ItemTitleText} from '../../../../components/texts/ItemTitleText';

type ThisProps = {
  phone: string;
  address: string;
};

export default function BasicInfoDisplay(props: ThisProps): JSX.Element {
  if (props.phone === null || props.address === null)
    return <ActivityIndicator size={'small'} />;
  return (
    <View style={styles.container}>
      <ItemTitleText>Contact</ItemTitleText>
      <ItemPhoneDisplay phone={props.phone} />
      <ItemTitleText>Address</ItemTitleText>
      <ItemAddressDisplay address={props.address} />
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
