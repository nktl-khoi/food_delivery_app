import {StyleSheet, View} from 'react-native';
import colors from '../../../styles/colors';
import {TextLink} from '../../../components/texts/TextLink';
import HorizontalListFood from '../../../components/displays/HorizontalListFood';
import {ItemTitleText} from '../../../components/texts/ItemTitleText';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
};

export default function MyFavoriteDisplay(props: ThisProps): JSX.Element {
  const navigateToFavoriteScreen = () => {
    props.navigation.navigate('FavoriteScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <ItemTitleText>My favorite foods</ItemTitleText>
        <TextLink onPress={navigateToFavoriteScreen}>View all</TextLink>
      </View>

      <HorizontalListFood data={props.data} navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
    gap: 12,
  },
  title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
