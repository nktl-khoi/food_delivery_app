import {TextProps} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GenericText} from './generics/GenericText';
import colors from '../../styles/colors';

type ThisProps = TextProps;

export function ErrorMessageText(props: ThisProps): JSX.Element {
  return (
    <GenericText {...props} style={[styles.text, props.style]}>
      {props.children}
    </GenericText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.red,
    fontSize: 12,
  },
});
