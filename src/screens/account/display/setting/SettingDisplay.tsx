import {StyleSheet, View} from 'react-native';

import colors from '../../../../styles/colors';
import ItemEditAccountDisplay from './ItemEditAccountDisplay';
import ItemChangePasswordDisplay from './ItemChangePasswordDisplay';
import ItemLogoutDisplay from './ItemLogoutDisplay';
import ItemCreateShopDisplay from './ItemCreateShopDisplay';
import ItemChangeToShopAccountDisplay from './ItemChangeToShopAccountDisplay';

type ThisProps = {
  navigation: any;
  params: {};
};

export default function SettingDisplay(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <ItemCreateShopDisplay navigation={props.navigation} />
      <ItemChangeToShopAccountDisplay navigation={props.navigation} />
      <ItemEditAccountDisplay
        params={props.params}
        navigation={props.navigation}
      />
      <ItemChangePasswordDisplay navigation={props.navigation} />
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
