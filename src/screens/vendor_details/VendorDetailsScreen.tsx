import {SafeAreaView} from 'react-native-safe-area-context';
import VendorDetailsWithData from './VendorDetailsWithData';
import {GET_ALL_SUBCATEGORY_OF_SHOP} from './VendorDetailsQuery';
import {useQuery} from '@apollo/client';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function VendorDetailsScreen(props: ThisProps): JSX.Element {
  const shopId = props.route.params.shopId;
  const {data, loading} = useQuery(GET_ALL_SUBCATEGORY_OF_SHOP, {
    variables: {
      getAllSubCategoryOfShopId: shopId,
    },
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  return (
    <SafeAreaView>
      <VendorDetailsWithData
        data={data?.getAllSubCategoryOfShop}
        navigation={props.navigation}
        shopId={shopId}
      />
    </SafeAreaView>
  );
}
