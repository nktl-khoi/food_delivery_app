import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ItemTitleText} from '../../../../components/texts/ItemTitleText';
import colors from '../../../../styles/colors';
import {Icon} from '@rneui/themed';
import {OrderStatus} from '../../../../types/constants';

type ThisProps = {
  status: OrderStatus;
  isHorizontal?: boolean;
};

export default function StatusDisplay(props: ThisProps): JSX.Element {
  if (props.status === OrderStatus.PENDING) {
    return (
      <View
        style={[
          styles.container,
          props.isHorizontal ? {flexDirection: 'row'} : {},
        ]}>
        <ItemTitleText style={styles.pending}>Pending</ItemTitleText>
        <Icon
          type="material"
          name="pending"
          size={24}
          color={colors.darkBlue}
        />
      </View>
    );
  } else if (props.status === OrderStatus.CANCELED) {
    return (
      <View
        style={[
          styles.container,
          props.isHorizontal ? {flexDirection: 'row'} : {},
        ]}>
        <ItemTitleText style={styles.cancel}>Canceled</ItemTitleText>
        <Icon type="material" name="cancel" size={24} color={colors.red} />
      </View>
    );
  } else if (props.status === OrderStatus.DELIVERED) {
    return (
      <View
        style={[
          styles.container,
          props.isHorizontal ? {flexDirection: 'row'} : {},
        ]}>
        <ItemTitleText style={styles.complete}>Delivered</ItemTitleText>
        <Icon
          type="ionicon"
          name="checkmark-done-circle"
          size={24}
          color={colors.green}
        />
      </View>
    );
  } else if (props.status === OrderStatus.ON_THE_WAY) {
    return (
      <View
        style={[
          styles.container,
          props.isHorizontal ? {flexDirection: 'row'} : {},
        ]}>
        <ItemTitleText style={styles.on_the_way}>On the way</ItemTitleText>
        <Icon
          type="material"
          name="pending"
          size={24}
          color={colors.yellowStar}
        />
      </View>
    );
  }
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  pending: {
    color: colors.darkBlue,
    fontSize: 12,
  },
  cancel: {
    color: colors.red,
    fontSize: 12,
  },
  complete: {
    color: colors.green,
    fontSize: 12,
  },
  on_the_way: {color: colors.yellowStar, fontSize: 12},
});
