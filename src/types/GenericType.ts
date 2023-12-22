import {ColorValue, StyleProp, ViewStyle} from 'react-native';

export type OnPressItem = (item: any | null) => void;

export type ItemComponent =
  | React.ReactNode
  | React.ComponentType<any>
  | React.ReactElement
  | null
  | undefined;

export type ActionType = () => void;

export type ComponentStyle = StyleProp<ViewStyle> | any | undefined;

export type ColorType = number | ColorValue;

export type OnChangeText = (text: string) => void;
