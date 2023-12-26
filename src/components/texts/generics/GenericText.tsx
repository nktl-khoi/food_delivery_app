import {Text, TextProps} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

type ThisProps = TextProps;

export function GenericText(props: ThisProps): JSX.Element {
  return (
    <Text {...props} style={[styles.text, props.style]} ellipsizeMode="tail">
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.darkBlack,
    flexWrap: 'wrap',
    fontFamily: fonts.POPPINS_REGULAR,
  },
});
