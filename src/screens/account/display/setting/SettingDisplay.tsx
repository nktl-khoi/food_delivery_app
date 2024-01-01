import {StyleSheet, View} from 'react-native';

import colors from '../../../../styles/colors';
import ItemEditAccountDisplay from './ItemEditAccountDisplay';
import ItemChangePasswordDisplay from './ItemChangePasswordDisplay';
import ItemLogoutDisplay from './ItemLogoutDisplay';
import ItemCreateShopDisplay from './ItemCreateShopDisplay';
import ItemSwapAccountDisplay from './ItemSwapAccountDisplay';
import {UserRole} from '../../../../types/constants';

type ThisProps = {
  navigation: any;
  params: any;
};

export default function SettingDisplay(props: ThisProps): JSX.Element {
  const role = props.params.role;
  const loginAs = props.params.loginAs;
  console.log(props.params.userId);

  return (
    <View style={styles.container}>
      {role === UserRole.USER && (
        <ItemCreateShopDisplay
          params={props.params}
          navigation={props.navigation}
        />
      )}

      {role === UserRole.SHOP_OWNER && (
        <ItemSwapAccountDisplay
          params={props.params}
          navigation={props.navigation}
        />
      )}

      <ItemEditAccountDisplay
        params={props.params}
        navigation={props.navigation}
      />

      {loginAs === UserRole.USER && (
        <ItemChangePasswordDisplay
          params={props.params}
          navigation={props.navigation}
        />
      )}

      <ItemLogoutDisplay navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 12,
    backgroundColor: colors.white,
  },
});
