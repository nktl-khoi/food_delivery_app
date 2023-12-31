import {StyleSheet, View} from 'react-native';
import EditNameDisplay from './EditNameDisplay';
import EditPhoneDisplay from './EditPhoneDisplay';
import EditAddressDisplay from './EditAddressDisplay';
import {ItemTitleText} from '../../../../components/texts/ItemTitleText';

type ThisProps = {
  name: string;
  onChangedName: (text: string) => void;
  phone: string;
  onChangedPhone: (text: string) => void;
  address: string;
  onChangedAddress: (text: string) => void;
};

export default function BasicInfoEditDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <ItemTitleText>Basic info</ItemTitleText>
        <EditNameDisplay
          value={props.name}
          onChangedText={props.onChangedName}
        />
      </View>

      <View>
        <ItemTitleText>Contact</ItemTitleText>
        <EditPhoneDisplay
          value={props.phone}
          onChangedText={props.onChangedPhone}
        />
      </View>

      <View>
        <ItemTitleText>Address</ItemTitleText>
        <EditAddressDisplay
          value={props.address}
          onChangedText={props.onChangedAddress}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
