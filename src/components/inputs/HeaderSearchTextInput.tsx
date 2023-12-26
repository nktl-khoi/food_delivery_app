import {Button, Icon, Input} from '@rneui/themed';
import {OnChangeText, OnPressItem} from '../../types/GenericType';
import colors from '../../styles/colors';
import {StyleSheet, View} from 'react-native';

type ThisProps = {
  value: string;
  onChangeText: OnChangeText;
  onPressBack: OnPressItem;
  onPressSearch: OnPressItem;
  isFilter: boolean;
  setFilter: (item: boolean) => void;
};

export default function HeaderSearchTextInput(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Button
        icon={
          <Icon
            name="arrow-back"
            size={20}
            color={colors.darkBlack}
            type="ionicon"
          />
        }
        buttonStyle={styles.button}
        onPress={props.onPressBack}
      />
      <Input
        placeholder="Looking for product..."
        value={props.value}
        onChangeText={props.onChangeText}
        //   leftIcon={
        //     <Icon
        //       name="search"
        //       size={20}
        //       color={colors.darkGrey}
        //       type="font-awesome"
        //     />
        //   }
        leftIconContainerStyle={{marginRight: 10}}
        containerStyle={{flex: 1}}
      />
      <Button
        icon={
          <Icon
            name="search"
            size={20}
            color={colors.darkBlack}
            type="font-awesome"
          />
        }
        buttonStyle={styles.button}
        onPress={props.onPressSearch}
      />

      <Button
        buttonStyle={styles.button}
        icon={
          <Icon
            name="filter"
            size={20}
            color={colors.darkBlack}
            type="font-awesome"
          />
        }
        onPress={() => props.setFilter(!props.isFilter)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    backgroundColor: 'transparent',
  },
});
