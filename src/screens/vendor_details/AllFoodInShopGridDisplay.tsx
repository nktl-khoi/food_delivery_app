import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import VerticalListFood from '../../components/displays/VerticalListFood';
import {useQuery} from '@apollo/client';
import {GET_ALL_PRODUCT_OF_SHOP} from './VendorDetailsQuery';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AllFoodInShopGridDisplay(
  props: ThisProps,
): JSX.Element {
  const {data, loading} = useQuery(GET_ALL_PRODUCT_OF_SHOP, {
    variables: {
      getAllProductOfShopId: props.route.params.shopId,
    },
  });

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <View style={styles.container}>
      <VerticalListFood
        data={data?.getAllProductOfShop}
        navigation={props.navigation}
        listHeaderComponent={<SectionText>All foods</SectionText>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
