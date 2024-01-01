import {ActivityIndicator} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_FOOD_BY_ID} from '../../screens/food_details/FoodDetailsQuery';
import {useFocusEffect} from '@react-navigation/native';
import EditProductWithData from './EditProductWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function EditProductScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_FOOD_BY_ID, {
    variables: {
      getProductById: props.route.params.productId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'large'} />;

  return (
    <EditProductWithData
      data={data?.getProductById}
      navigation={props.navigation}
    />
  );
}
