import {Button, Icon, Image, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import images from '../../../../styles/images';
import React from 'react';
import colors from '../../../../styles/colors';
import display from '../../../../utils/display';
import Separator from '../../../../components/displays/Separator';
import fonts from '../../../../styles/fonts';

type ThisProps = {
  navigation: any;
};

export default function EmptyCartTab(props: ThisProps): JSX.Element {
  const navigateToCartScreen = () => {
    props.navigation.navigate('HomeStacks');
  };

  return (
    <View style={styles.emptyCartContainer}>
      <Image
        style={styles.emptyCartImage}
        source={images.EMPTY_CART}
        resizeMode="contain"
      />
      <Text style={styles.emptyCartText}>Cart Empty</Text>
      <Text style={styles.emptyCartSubText}>
        Go ahead and order some tasty food
      </Text>
      <Button
        onPress={navigateToCartScreen}
        icon={
          <Icon name="plus" color={colors.white} size={20} type="antdesign" />
        }
        buttonStyle={styles.addButtonEmpty}
        titleStyle={styles.addButtonEmptyText}>
        Add food
      </Button>

      <Separator height={display.setHeight(15)} />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 30,
    fontFamily: fonts.POPPINS_LIGHT,
    lineHeight: 30 * 1.4,
    color: colors.primary,
  },
  emptyCartSubText: {
    fontSize: 12,
    fontFamily: fonts.POPPINS_MEDIUM,
    lineHeight: 12 * 1.4,
    color: colors.lightGrey,
  },
  addButtonEmpty: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: display.setWidth(4),
    paddingVertical: 5,
    marginTop: 10,
    justifyContent: 'space-evenly',
    elevation: 3,
    alignItems: 'center',
  },
  addButtonEmptyText: {
    fontSize: 12,
    fontFamily: fonts.POPPINS_MEDIUM,
    lineHeight: 12 * 1.4,
    color: colors.white,
    marginLeft: 10,
  },
  emptyCartImage: {
    height: display.setWidth(60),
    width: display.setWidth(60),
  },
});
