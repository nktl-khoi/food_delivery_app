import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_FOOD_BY_ID} from './FoodDetailsQuery';
import FoodDetailsWithData from './FoodDetailsWithData';
import {GET_USER_BY_FIREBASE_UID} from '../account/AccountQuery';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {useFocusEffect} from '@react-navigation/native';
import {UserRole} from '../../types/constants';
import {GenericText} from '../../components/texts/generics/GenericText';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShopFoodDetailWithData from '../../shop_screens/shop_food_details/ShopFoodDetailWithData';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function FoodDetailsScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_FOOD_BY_ID, {
    variables: {
      getProductById: props.route.params.foodId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  return <GetUserIdInFoodDetails data={data} navigation={props.navigation} />;
}

type GetUserIdType = {
  data: any;
  navigation: any;
};

function GetUserIdInFoodDetails(props: GetUserIdType): JSX.Element {
  const {data, loading} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  if (loading) return <ActivityIndicator size={'large'} />;
  if (data?.getUserByFirebaseUID?.loginAs === UserRole.USER) {
    return (
      <FoodDetailsWithData
        userId={data?.getUserByFirebaseUID?.id}
        data={props.data ? props.data : null}
        navigation={props.navigation}
      />
    );
  } else if (data?.getUserByFirebaseUID?.loginAs === UserRole.SHOP_OWNER) {
    return (
      <ShopFoodDetailWithData
        data={props.data ? props.data : null}
        navigation={props.navigation}
      />
    );
  }
  return (
    <SafeAreaView>
      <GenericText>Error login</GenericText>
    </SafeAreaView>
  );
}
