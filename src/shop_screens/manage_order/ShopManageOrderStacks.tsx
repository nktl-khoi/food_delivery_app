import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../../styles/colors';
import ShopManageOrderScreen from './ShopManageOrderScreen';
import OrderDetailsScreen from '../../screens/orders/OrderDetailsScreen';
import ReportVendorScreen from '../../screens/vendor_details/ReportVendorScreen';

type ManageOrderStackParams = {
  ShopManageOrderScreen: undefined;
  OrderDetailsScreen: undefined;
  ReportVendorScreen: undefined;
};

const ManageOrderNavigators =
  createNativeStackNavigator<ManageOrderStackParams>();

export default function ShopManageOrderStacks(): JSX.Element {
  return (
    <ManageOrderNavigators.Navigator
      initialRouteName="ShopManageOrderScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <ManageOrderNavigators.Screen
        name="ShopManageOrderScreen"
        component={ShopManageOrderScreen}
      />
      <ManageOrderNavigators.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
        options={{headerShown: true, title: 'Order details'}}
      />
      <ManageOrderNavigators.Screen
        name="ReportVendorScreen"
        component={ReportVendorScreen}
        options={{headerShown: true, title: 'Report user'}}
      />
    </ManageOrderNavigators.Navigator>
  );
}
