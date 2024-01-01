import React from 'react';
import {View, ViewProps} from 'react-native';
import {ComponentStyle} from '../../types/GenericType';

type ThisProps = {
  height: number;
  width: number;
  style?: ComponentStyle;
};

export default function Separator(props: ThisProps): JSX.Element {
  return (
    <View style={[{height: props.height, width: props.width}, props.style]} />
  );
}

Separator.defaultProps = {
  height: 0,
  width: 0,
};
