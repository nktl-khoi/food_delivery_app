import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../../../components/displays/generics/GenericFlatList';
import ItemShopAccount from '../../display/ItemShopAccount';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function ShopAccountList(props: ThisProps): JSX.Element {
  const onPressItem = (item: any) => {
    props.navigation.navigate('AccountDetailScreen', {
      accountId: item.user.account.id,
    });
  };

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ItemShopAccount
        key={index}
        data={item}
        onPressItem={() => onPressItem(item)}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
