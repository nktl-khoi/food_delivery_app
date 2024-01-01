import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../../styles/colors';
import AccountDetailScreen from '../account_details/AccountDetailScreen';
import ReportDetailScreen from '../account_details/ReportDetailScreen';
import ReportScreen from './ReportScreen';

type ReportListParams = {
  AccountDetailScreen: undefined;
  ReportDetailScreen: undefined;
  ReportScreen: undefined;
};

const ReportListNavigators = createNativeStackNavigator<ReportListParams>();

export default function ReportListStacks(): JSX.Element {
  return (
    <ReportListNavigators.Navigator
      initialRouteName="ReportScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <ReportListNavigators.Screen
        name="ReportScreen"
        component={ReportScreen}
      />

      <ReportListNavigators.Screen
        name="AccountDetailScreen"
        component={AccountDetailScreen}
        options={{
          headerShown: true,
          headerTitle: 'Account details',
        }}
      />
      <ReportListNavigators.Screen
        name="ReportDetailScreen"
        component={ReportDetailScreen}
        options={{
          headerShown: true,
          headerTitle: 'Report details',
        }}
      />
    </ReportListNavigators.Navigator>
  );
}
