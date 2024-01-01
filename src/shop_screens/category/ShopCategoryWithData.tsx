import {Button} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import VerticalListFood from '../../components/displays/VerticalListFood';
import {useQuery} from '@apollo/client';

import {SectionText} from '../../components/texts/SectionText';
import HorizontalListFood from '../../components/displays/HorizontalListFood';
import {useCallback, useEffect} from 'react';
import {GET_ALL_SUBCATEGORY_OF_SHOP} from '../../screens/vendor_details/VendorDetailsQuery';
import ShopInfoDisplay from '../display/ShopInfoDisplay';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  shopId: string;
  navigation: any;
};

export default function ShopCategoryWithData(props: ThisProps): JSX.Element {
  const navigateToAllFoodOfShop = () => {
    props.navigation.navigate('VendorFoodDetails', {
      shopId: props.shopId,
    });
  };

  const navigateToAddFoodScreen = () => {
    props.navigation.navigate('AddProductShopScreen', {
      shopId: props.shopId,
    });
  };

  const {data, loading, refetch} = useQuery(GET_ALL_SUBCATEGORY_OF_SHOP, {
    variables: {
      getAllSubCategoryOfShopId: props.shopId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <View key={index}>
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
        listHeaderComponent={
          <View>
            <ShopInfoDisplay id={props.shopId} />
            <Button
              buttonStyle={[styles.button, {backgroundColor: colors.green}]}
              titleStyle={styles.buttonTitle}
              onPress={navigateToAddFoodScreen}>
              ADD NEW FOOD
            </Button>
          </View>
        }
        listFooterComponent={
          <Button
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={navigateToAllFoodOfShop}>
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
  buttonTitle: {
    fontSize: 12,
    fontFamily: fonts.POPPINS_BOLD,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
