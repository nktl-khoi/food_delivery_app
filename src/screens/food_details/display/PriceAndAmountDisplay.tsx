import {StyleSheet, View} from 'react-native';

import {PriceText} from '../../../components/texts/PriceText';
import SubtractButton from '../../../components/buttons/SubtractButton';
import {GenericText} from '../../../components/texts/generics/GenericText';
import AddButton from '../../../components/buttons/AddButton';
import colors from '../../../styles/colors';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';

type ThisProps = {
  price: number;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};

export default function PriceAndAmountDisplay(props: ThisProps): JSX.Element {
  const addMore = () => {
    props.setAmount(props.amount + 1);
  };

  const reduceLess = () => {
    if (props.amount > 0) {
      props.setAmount(props.amount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <ItemTitleText>Price: </ItemTitleText>
        <PriceText textSize={16} priceValue={props.price} />
      </View>

      <View style={styles.amount}>
        <SubtractButton
          buttonStyle={styles.subtractButton}
          onPressItem={reduceLess}
        />
        <GenericText>{props.amount}</GenericText>
        <AddButton onPressItem={addMore} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  amount: {flexDirection: 'row', gap: 12},
  subtractButton: {backgroundColor: colors.lightGrey},
});
