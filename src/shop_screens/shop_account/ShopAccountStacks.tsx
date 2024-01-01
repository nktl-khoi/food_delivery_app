import colors from '../../styles/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopAccountScreen from './ShopAccountScreen';
import EditShopAccountScreen from './EditShopAccountScreen';

type AccountStackParams = {
  ShopAccountScreen: undefined;
  EditShopAccountScreen: undefined;
};

const AccountNavigators = createNativeStackNavigator<AccountStackParams>();

export default function ShopAccountStacks(): JSX.Element {
  return (
    <AccountNavigators.Navigator
      initialRouteName="ShopAccountScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <AccountNavigators.Screen
        name="ShopAccountScreen"
        component={ShopAccountScreen}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: '',
          contentStyle: {
            backgroundColor: colors.lightGrey,
          },
        }}
      />
      <AccountNavigators.Screen
        name="EditShopAccountScreen"
        component={EditShopAccountScreen}
        options={{headerShown: true, title: 'Shop details'}}
      />
    </AccountNavigators.Navigator>
  );
}
