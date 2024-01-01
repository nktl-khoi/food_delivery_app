import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ORDER_BY_ID} from './OrderQuery';
import {useFocusEffect} from '@react-navigation/native';
import OrderDetailsWithData from './OrderDetailsWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function OrderDetailsScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ORDER_BY_ID, {
    variables: {
      orderId: props.route.params.orderId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  return (
    <OrderDetailsWithData
      data={data?.getOrderById ? data.getOrderById : null}
      navigation={props.navigation}
    />
  );
}
