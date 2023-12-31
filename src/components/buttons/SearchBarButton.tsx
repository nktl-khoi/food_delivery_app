import {Button} from '@rneui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GenericText} from '../texts/generics/GenericText';
import colors from '../../styles/colors';

type ThisProps = {
  navigation: any;
};

export function SearchBarButton(props: ThisProps): JSX.Element {
  const navigateToSearchScreen = () => {
    props.navigation.navigate('SearchScreen');
  };
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.buttonStyle}
      icon={{
        name: 'search',
        size: 20,
        color: colors.darkGrey,
        type: 'font-awesome',
      }}
      onPress={navigateToSearchScreen}>
      <GenericText>Tap here to search...</GenericText>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {},
  buttonStyle: {
    gap: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 32,
    backgroundColor: colors.white,
  },
});
