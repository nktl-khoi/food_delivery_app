import {Dimensions, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/themed';

import {OnPressItem} from '../../../types/GenericType';
import colors from '../../../styles/colors';

type ThisProps = {
  navigation: any;
  onPressSave: OnPressItem;
  title?: string;
};

export default function SaveCancelButton(props: ThisProps): JSX.Element {
  const windowWidth = Dimensions.get('window').width;
  const buttonWidth = (windowWidth - 40) / 2 - 10;

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        titleStyle={styles.title}
        buttonStyle={[styles.button, styles.cancel, {width: buttonWidth}]}
        onPress={goBack}>
        CANCEL
      </Button>
      <Button
        buttonStyle={[styles.button, {width: buttonWidth}]}
        onPress={props.onPressSave}>
        {props.title ? props.title : 'SAVE'}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 20,
  },
  cancel: {
    backgroundColor: colors.lightGrey,
  },
  title: {
    color: colors.darkBlack,
  },
  input: {
    backgroundColor: colors.white,
  },
});
