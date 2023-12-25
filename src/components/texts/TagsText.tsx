import {TextProps} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import {GenericText} from './generics/GenericText';
import fonts from '../../styles/fonts';

type ThisProps = TextProps & {};

export function TagsText(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <GenericText style={styles.text} {...props}>
        {props.children}
      </GenericText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  text: {
    color: colors.darkBlack,
    fontFamily: fonts.POPPINS_BOLD,
    fontSize: 12,
  },
});
