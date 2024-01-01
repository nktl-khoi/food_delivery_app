// import {StyleSheet} from 'react-native';
// import colors from '../../styles/colors';
// import {ComponentStyle, OnPressItem} from '../../types/GenericType';
// import AddAndSubtractGenericButton from './generics/AddAndSubtractGenericButton';

// type ThisProps = {
//   onPressItem: OnPressItem | undefined;
//   buttonStyle?: ComponentStyle;
//   iconSize?: number;
//   isFavorite: boolean | undefined;
// };

// export default function FavoriteButton(props: ThisProps): JSX.Element {
//   return (
//     <AddAndSubtractGenericButton
//       onPress={props.onPressItem}
//       name={props.isFavorite ? 'heart' : 'hearto'}
//       iconType="antdesign"
//       iconSize={props.iconSize ? props.iconSize : 24}
//       iconColor={colors.heartColor}
//       buttonStyle={[styles.button, props.buttonStyle]}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'transparent',
//   },
// });
