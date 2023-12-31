import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import ItemImageFood from '../../../components/items/ItemImageFood';
import display from '../../../utils/display';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';
import {ItemSubtitleText} from '../../../components/texts/ItemSubtitleText';
import {PriceText} from '../../../components/texts/PriceText';
import {Button} from '@rneui/themed';
import colors from '../../../styles/colors';
import SubtractButton from '../../../components/buttons/SubtractButton';
import {GenericText} from '../../../components/texts/generics/GenericText';
import AddButton from '../../../components/buttons/AddButton';
import fonts from '../../../styles/fonts';
import {ItemCartType} from '../../../types/ItemType';
import DeleteDialog from './DeleteDialog';
import {UPDATE_CART_PRODUCT} from '../CartQuery';
import {useMutation} from '@apollo/client';
import Snackbar from 'react-native-snackbar';

type ThisProps = ItemCartType & {
  refetch: any;
  sizeId: string;
};

export default function ItemCart(props: ThisProps): JSX.Element {
  const [isChangeAmount, setChangeAmount] = useState(false);
  const [amount, setAmount] = useState(props.amount);
  const [updateCartProduct, {data, loading, error}] =
    useMutation(UPDATE_CART_PRODUCT);

  const addMore = () => {
    setAmount(amount + 1);
    setChangeAmount(true);
  };

  const reduceLess = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      setChangeAmount(true);
    }
  };

  const onPressSave = async () => {
    await updateCartProduct({
      variables: {
        cartProductId: props.id,
        productSizeId: props.sizeId,
        amount: amount,
        fullPrice: props.priceValue,
      },
    }).then(() => {
      props.refetch();
      Snackbar.show({text: 'Item updated success'});
    });
  };

  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <View style={styles.container}>
        <ItemImageFood
          imageUri={props.imageUri}
          imageWidth={display.setWidth(20)}
          imageHeight={display.setHeight(10)}
        />
        <View style={styles.info_container}>
          <ItemTitleText style={styles.text}>{props.foodName}</ItemTitleText>

          <ItemSubtitleText style={{marginBottom: 4}}>
            Size: {props.size}
          </ItemSubtitleText>

          <PriceText priceValue={props.priceValue} textSize={14} />
        </View>

        <View style={styles.amount}>
          <SubtractButton
            buttonStyle={styles.subtractButton}
            onPressItem={reduceLess}
          />
          <GenericText>{amount}</GenericText>
          <AddButton onPressItem={addMore} />
        </View>

        <DeleteDialog cartProductId={props.id} refetch={props.refetch} />
      </View>

      {isChangeAmount && (
        <View style={styles.buttonContainer}>
          <Button
            titleStyle={styles.title}
            buttonStyle={[styles.button, styles.cancel]}
            onPress={() => {
              setChangeAmount(false);
              setAmount(props.amount);
            }}>
            CANCEL
          </Button>
          <Button
            titleStyle={styles.titleSave}
            buttonStyle={[styles.button]}
            onPress={() => {
              onPressSave();
              setChangeAmount(false);
            }}>
            SAVE
          </Button>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingEnd: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightGrey,
  },
  info_container: {
    flex: 1,
  },
  amount: {flexDirection: 'row', gap: 8},
  subtractButton: {backgroundColor: colors.lightGrey},
  text: {
    marginBottom: -8,
  },
  image_item: {
    width: 160,
    height: 120,
    borderRadius: 20,
  },
  add_button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
    paddingEnd: 20,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  cancel: {
    backgroundColor: colors.lightGrey,
  },
  title: {
    color: colors.darkBlack,
    fontSize: 12,
    fontFamily: fonts.POPPINS_MEDIUM,
  },
  titleSave: {
    fontSize: 12,
    fontFamily: fonts.POPPINS_MEDIUM,
  },
});
