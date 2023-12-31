import {StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {TotalPriceAndPlaceOrder} from '../../cart/display/TotalPriceAndPlaceOrderDisplay';
import {GenericText} from '../../../components/texts/generics/GenericText';
import GenericBasicInfoEditItem from '../../account/generics/GenericBasicInfoEditItem';

type ThisProps = {
  totalPrice: number;
  onPressPlaceOrder: (item: any) => void;
  note: string;
  setNote: (item: any) => void;
  isLoading: boolean;
};

export function ListFooterOrder(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <ItemTitleText>Payment method</ItemTitleText>
        <GenericText>Cast on delivery</GenericText>
      </View>

      <View>
        <ItemTitleText>Note</ItemTitleText>
        <GenericBasicInfoEditItem
          label={'Note'}
          placeHolder={'Note for shop...'}
          value={props.note}
          onChangedText={props.setNote}
          iconName={'sticky-note'}
          iconType={'font-awesome'}
        />
      </View>
      <TotalPriceAndPlaceOrder
        price={props.totalPrice}
        onPressPlaceOrder={props.onPressPlaceOrder}
        loading={props.isLoading}
      />
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
