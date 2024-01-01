import {Button} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import ShopInfoDisplay from '../../shop_screens/display/ShopInfoDisplay';
import VerticalListFood from '../../components/displays/VerticalListFood';
import {SectionText} from '../../components/texts/SectionText';
import HorizontalListFood from '../../components/displays/HorizontalListFood';
import {useCallback} from 'react';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  shopId: string;
};

export default function VendorDetailsWithData(props: ThisProps): JSX.Element {
  const navigateToAllFoodOfShop = () => {
    props.navigation.navigate('VendorFoodDetails', {
      shopId: props.shopId,
    });
  };

  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <View key={index}>
        <SectionText>{item.title}</SectionText>
        <HorizontalListFood
          data={item.products}
          navigation={props.navigation}
        />
      </View>
    ),
    [props.data],
  );

  return (
    <VerticalListFood
      data={props.data}
      navigation={props.navigation}
      contentContainerStyle={styles.container}
      renderItem={memorizedValue}
      listHeaderComponent={
        <ShopInfoDisplay
          canReport
          navigation={props.navigation}
          id={props.shopId}
        />
      }
      listFooterComponent={
        <Button buttonStyle={styles.button} onPress={navigateToAllFoodOfShop}>
          VIEW ALL FOODS
        </Button>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 12,
  },
});
