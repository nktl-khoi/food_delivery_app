import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ItemTitleText} from '../../../../components/texts/ItemTitleText';
import colors from '../../../../styles/colors';
import {Icon} from '@rneui/themed';

type ThisProps = {
  status: string;
};

export default function StatusDisplay(props: ThisProps): JSX.Element {
  if (props.status === 'Pending') {
    return (
      <View style={styles.container}>
        <ItemTitleText style={styles.pending}>{props.status}</ItemTitleText>
        <Icon
          type="material"
          name="pending"
          size={24}
          color={colors.darkBlue}
        />
      </View>
    );
  } else if (props.status === 'Cancel') {
    return (
      <View style={styles.container}>
        <ItemTitleText style={styles.cancel}>{props.status}</ItemTitleText>
        <Icon type="material" name="cancel" size={24} color={colors.red} />
      </View>
    );
  } else if (props.status === 'Complete') {
    return (
      <View style={styles.container}>
        <ItemTitleText style={styles.complete}>{props.status}</ItemTitleText>
        <Icon
          type="ionicon"
          name="checkmark-done-circle"
          size={24}
          color={colors.green}
        />
      </View>
    );
  }
  return <></>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
});
