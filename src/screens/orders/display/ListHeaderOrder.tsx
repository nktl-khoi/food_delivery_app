import {StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import EditAddressDisplay from '../../account/display/edit_info/EditAddressDisplay';
import {TextLink} from '../../../components/texts/TextLink';
import {ChooseDateDisplay} from '../../../components/displays/ChooseDateDisplay';
import colors from '../../../styles/colors';
import React from 'react';
import {DatePickerDialog} from '../../../components/dialogs/DatePickerDialog';

type ThisProps = {
  address: string;
  setAddress: (item: string) => void;
  deliveryTime: Date;
  setDeliveryTime: (item: Date) => void;
};

export function ListHeaderOrder(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <ItemTitleText>Address</ItemTitleText>
        <TextLink onPress={() => {}}>Choose address</TextLink>
      </View>

      <EditAddressDisplay
        value={props.address}
        onChangedText={props.setAddress}
      />

      <View style={styles.text}>
        <ItemTitleText>Delivery time</ItemTitleText>
        <DatePickerDialog
          onSelectedDate={props.setDeliveryTime}
          date={props.deliveryTime}
        />
      </View>

      <ChooseDateDisplay
        iconSize={24}
        iconColor={colors.darkBlack}
        value={props.deliveryTime}
      />

      <ItemTitleText>All food</ItemTitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
