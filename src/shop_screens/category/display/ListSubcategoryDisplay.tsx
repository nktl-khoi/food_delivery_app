import {ItemFoodSizeName} from '../../../types/ItemType';
import React from 'react';
import ListChosenDisplay from '../../../components/displays/ListChosenDisplay';
import {useQuery} from '@apollo/client';
import {GET_ALL_SUB_CATEGORY_TAG_OF_SHOP} from '../ShopCategoryQuery';
import {ActivityIndicator, View} from 'react-native';
import {ErrorMessageText} from '../../../components/texts/ErrorMessageText';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  shopId: string;
  chosen: string;
  setChosen: (item: string) => void;
};

export default function ListSubcategoryDisplay(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ALL_SUB_CATEGORY_TAG_OF_SHOP, {
    variables: {
      id: props.shopId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  const onPressItem = (item: ItemFoodSizeName, index: number) => {
    props.setChosen(item.id);
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <View>
          {data?.getAllSubCategoryOfShop.length > 0 ? (
            <ListChosenDisplay
              data={data?.getAllSubCategoryOfShop}
              chosen={props.chosen}
              setChosen={props.setChosen}
              onPressItem={onPressItem}
            />
          ) : (
            <ErrorMessageText>
              You don't have any subcategory here! Please add new one!
            </ErrorMessageText>
          )}
        </View>
      )}
    </>
  );
}
