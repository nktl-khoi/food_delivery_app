import {TextProps} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GenericText} from './generics/GenericText';
import fonts from '../../styles/fonts';

type ThisProps = TextProps;

export function BigTitleText(props: ThisProps): JSX.Element {
  return (
    <GenericText {...props} style={[styles.text, props.style]}>
      {props.children}
    </GenericText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontFamily: fonts.POPPINS_SEMI_BOLD,
  },
});
