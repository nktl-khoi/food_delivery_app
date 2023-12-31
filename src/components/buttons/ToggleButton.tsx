import React, {useState} from 'react';
import {TouchableOpacity, Animated, StyleSheet, Easing} from 'react-native';
import colors from '../../styles/colors';

const containerStyle = (size: number, isActive: boolean) => ({
  backgroundColor: isActive ? colors.primary : colors.lightGrey,
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32,
  padding: 4 * size,
});

const toggleStyle = (size: number, animatedValue: any) => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: colors.white,
  borderRadius: 32,
  transform: [
    {
      translateX: animatedValue,
    },
  ],
});

type ThisProps = {
  size: number;
};

export default function ToggleButton(props: ThisProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const toggleHandle = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : 32 * props.size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setIsActive(!isActive);
  };

  return (
    <TouchableOpacity
      style={containerStyle(props.size, isActive)}
      onPress={() => toggleHandle()}
      activeOpacity={0.8}>
      <Animated.View style={toggleStyle(props.size, animatedValue)} />
    </TouchableOpacity>
  );
}
