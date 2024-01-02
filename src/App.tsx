import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './styles/theme';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/sign_up/SignUpScreen';
import {MainStack} from './MainStack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AllReportScreen from './screens/ban/AllReportScreen';
import ReportDetailScreen from './admin_screen/account_details/ReportDetailScreen';
import ReportDetailBanScreen from './screens/ban/ReportDetailBanScreen';

type RootStackParams = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  MainStack: undefined;
  AllReportScreen: undefined;
  ReportDetailScreen: undefined;
  ReportDetailBanScreen: undefined;
};
const RootStackNavigator = createNativeStackNavigator<RootStackParams>();

const client = new ApolloClient({
  uri: 'https://fast-food-app-server-3f49c46d8b64.herokuapp.com',
  cache: new InMemoryCache(),
});

export default function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootStackNavigator.Navigator
              initialRouteName="LoginScreen"
              screenOptions={{headerShown: false}}>
              <RootStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
              />
              <RootStackNavigator.Screen
                name="SignUpScreen"
                component={SignUpScreen}
              />
              <RootStackNavigator.Screen
                name="MainStack"
                component={MainStack}
              />
              <RootStackNavigator.Screen
                name="AllReportScreen"
                component={AllReportScreen}
                options={{headerShown: true, title: 'All reports'}}
              />
              <RootStackNavigator.Screen
                name="ReportDetailBanScreen"
                component={ReportDetailBanScreen}
                options={{headerShown: true, title: 'Report details'}}
              />
            </RootStackNavigator.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
