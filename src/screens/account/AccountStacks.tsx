import colors from '../../styles/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDetailsScreen from '../food_details/FoodDetailsScreen';
import VendorDetailsScreen from '../vendor_details/VendorDetailsScreen';
import FavoriteScreen from './FavoriteScreen';
import AccountScreen from './AccountScreen';
import EditAccountScreen from './EditAccountScreen';
import ChangePasswordScreen from './ChangePasswordScreen';
import CreateShopAccountScreen from './CreateShopAccountScreen';

type AccountStackParams = {
  FoodDetailsScreen: undefined;
  VendorDetailsScreen: undefined;
  AccountScreen: undefined;
  FavoriteScreen: undefined;
  EditAccountScreen: undefined;
  ChangePasswordScreen: undefined;
  CreateShopAccountScreen: undefined;
};

const AccountNavigators = createNativeStackNavigator<AccountStackParams>();

export default function AccountStacks(): JSX.Element {
  return (
    <AccountNavigators.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <AccountNavigators.Screen
        name="FoodDetailsScreen"
        component={FoodDetailsScreen}
        options={{headerTransparent: true, headerShown: true, headerTitle: ''}}
      />
      <AccountNavigators.Screen
        name="VendorDetailsScreen"
        component={VendorDetailsScreen}
        options={{headerShown: true, title: 'Shop details'}}
      />
      <AccountNavigators.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          headerShown: true,
          headerTitle: 'My favorites',
        }}
      />
      <AccountNavigators.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <AccountNavigators.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={{
          headerShown: true,
          headerTitle: 'Edit account',
        }}
      />
      <AccountNavigators.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          headerTitle: 'Change password',
        }}
      />
      <AccountNavigators.Screen
        name="CreateShopAccountScreen"
        component={CreateShopAccountScreen}
        options={{
          headerShown: true,
          headerTitle: 'Create a shop account',
        }}
      />
    </AccountNavigators.Navigator>
  );
}
