import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import ItemIngredientsHorizontal from './ItemIngredientsHorizontal';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  productId: string;
  isPressable: boolean;
};

export default function ListIngredientsDisplay(props: ThisProps): JSX.Element {
  const navigateToEditIngredientScreen = (item: any) => {
    console.log(item);
    props.navigation.navigate('EditIngredientsScreen', {
      productId: props.productId,
      name: item.name,
      price: item.price,
      imageUri: item.imageUri,
      id: item.id,
    });
  };

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <ItemIngredientsHorizontal
        key={item.id}
        imageUri={item.imageUri}
        onPressItem={() => navigateToEditIngredientScreen(item)}
        id={item.id}
        price={item.price}
        name={item.name}
        isPressable={props.isPressable}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      horizontal
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
});
