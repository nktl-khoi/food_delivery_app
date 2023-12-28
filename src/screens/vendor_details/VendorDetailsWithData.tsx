import {Button} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import VendorInfoDisplay from './display/VendorInfoDisplay';
import VerticalListFood from '../../components/displays/VerticalListFood';
import {useQuery} from '@apollo/client';
import {GET_ALL_SUBCATEGORY_OF_SHOP} from './VendorDetailsQuery';
import {SectionText} from '../../components/texts/SectionText';
import HorizontalListFood from '../../components/displays/HorizontalListFood';
import {useCallback} from 'react';

type ThisProps = {
  shopId: string;
  navigation: any;
};

type FoodSectionType = {
  title: string;
  listFood: ArrayLike<any>;
};

export default function VendorDetailsWithData(props: ThisProps): JSX.Element {
  const navigateToAllFoodOfShop = () => {
    props.navigation.navigate('VendorFoodDetails', {
      shopId: props.shopId,
    });
  };
  const {data, loading} = useQuery(GET_ALL_SUBCATEGORY_OF_SHOP, {
    variables: {
      getAllSubCategoryOfShopId: props.shopId,
    },
  });

  const memorizedValue = useCallback(
    ({item}: {item: any}) => (
      <View>
        <SectionText>{item.title}</SectionText>
        <HorizontalListFood
          data={item.products}
          navigation={props.navigation}
        />
      </View>
    ),
    [data],
  );

  if (!loading) {
    return (
      <VerticalListFood
        data={data?.getAllSubCategoryOfShop}
        navigation={props.navigation}
        contentContainerStyle={styles.container}
        renderItem={memorizedValue}
        listHeaderComponent={<VendorInfoDisplay id={props.shopId} />}
        listFooterComponent={
          <Button buttonStyle={styles.button} onPress={navigateToAllFoodOfShop}>
            VIEW ALL FOODS
          </Button>
        }
      />
    );
  } else return <ActivityIndicator size={'large'} />;
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 12,
  },
});
