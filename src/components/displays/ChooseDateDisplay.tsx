import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {GenericText} from '../texts/generics/GenericText';
import {Icon} from '@rneui/themed';

interface ThisProps {
  iconSize?: number;
  iconColor?: string;
  value: Date;
}
export function ChooseDateDisplay(props: ThisProps): JSX.Element {
  let text;
  // if (props.value instanceof Date) {
  //   text =
  //     props.value.getDate() +
  //     '/' +
  //     (props.value.getMonth() + 1) +
  //     '/' +
  //     props.value.getFullYear();
  // } else {
  //   text = props.value;
  // }
  if (props.value instanceof Date) {
    text =
      props.value.getDate() +
      '/' +
      (props.value.getMonth() + 1) +
      '/' +
      props.value.getFullYear() +
      ' - ' +
      props.value.getHours() +
      ':' +
      props.value.getMinutes();
  } else text = props.value;
  return (
    <View style={styles.container}>
      <Icon
        name="calendar"
        type="material-community"
        color={props.iconColor}
        size={props.iconSize}
        style={styles.container}></Icon>
      <GenericText style={styles.text}>{text}</GenericText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 4,
    height: 60,
    textAlignVertical: 'center',
  },
});
