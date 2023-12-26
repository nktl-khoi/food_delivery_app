import {TextProps} from '@rneui/themed';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {GenericText} from './generics/GenericText';
import {pressableRippleConfig} from '../../styles/pressable_config';
import {OnPressItem} from '../../types/GenericType';
import fonts from '../../styles/fonts';

type ThisProps = TextProps & {
  onPressItem?: OnPressItem;
};

export function TextLink(props: ThisProps): JSX.Element {
  return (
    <Pressable
      android_ripple={pressableRippleConfig}
      onPress={props.onPressItem}>
      <GenericText {...props} style={[styles.text, props.style]}>
        {props.children}
      </GenericText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.POPPINS_BOLD,
    color: colors.darkBlue,
    fontSize: 16,
  },
});
