import React from 'react';
import {Icon} from '@rneui/themed';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import ShopNotificationScreen from './notification/ShopNotificationScreen';
import ShopAccountStacks from './shop_account/ShopAccountStacks';
import ShopCategoryStacks from './category/ShopCategoryStacks';
import ShopManageOrderStacks from './manage_order/ShopManageOrderStacks';

type MainTabStackParams = {
  ShopCategoryStacks: undefined;
  ShopManageOrderStacks: undefined;
  ShopAccountStacks: undefined;
  ShopNotificationScreen: undefined;
};

const MainTabStackNavigator = createBottomTabNavigator<MainTabStackParams>();

export function MainShopStack(): JSX.Element {
  return (
    <MainTabStackNavigator.Navigator
      initialRouteName="ShopCategoryStacks"
      sceneContainerStyle={{backgroundColor: colors.white}}
      screenOptions={MainTabScreenOptions}>
      <MainTabStackNavigator.Screen
        name="ShopCategoryStacks"
        component={ShopCategoryStacks}
      />
      <MainTabStackNavigator.Screen
        name="ShopManageOrderStacks"
        component={ShopManageOrderStacks}
      />
      <MainTabStackNavigator.Screen
        name="ShopNotificationScreen"
        component={ShopNotificationScreen}
      />
      <MainTabStackNavigator.Screen
        name="ShopAccountStacks"
        component={ShopAccountStacks}
      />
    </MainTabStackNavigator.Navigator>
  );
}

const MainTabScreenOptions = ({route}: any) => ({
  tabBarIcon: ({focused, color, size}: any) => {
    let icon;
    if (route.name === 'ShopCategoryStacks') {
      icon = focused
        ? (icon = (
            <Icon type="font-awesome" name="inbox" size={size} color={color} />
          ))
        : (icon = (
            <Icon type="feather" name="inbox" size={size} color={color} />
          ));
    } else if (route.name === 'ShopManageOrderStacks') {
      icon = focused
        ? (icon = (
            <Icon
              type="font-awesome"
              name="file-text"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="font-awesome"
              name="file-text-o"
              size={size}
              color={color}
            />
          ));
    } else if (route.name === 'ShopNotificationScreen') {
      icon = focused
        ? (icon = (
            <Icon
              type="material-community"
              name="bell"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="material-community"
              name="bell-outline"
              size={size}
              color={color}
            />
          ));
    } else if (route.name === 'ShopAccountStacks') {
      icon = focused
        ? (icon = (
            <Icon
              type="material-community"
              name="account-circle"
              size={size}
              color={color}
            />
          ))
        : (icon = (
            <Icon
              type="material-community"
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ));
    }
    // You can return any component that you like here!
    return icon;
  },
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.darkBlack,
  headerShown: false,
  tabBarShowLabel: false,
});
