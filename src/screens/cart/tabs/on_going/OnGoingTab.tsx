import {StyleSheet, View} from 'react-native';
import React from 'react';
import OnGoingList from '../../display/OnGoingList';

const listCart = [
  {
    id: 1,
    imageUri: '',
    foodName: 'Food 1 ',
    size: 'Small',
    status: 'Pending',
    amount: 3,
  },
  {
    id: 2,
    imageUri: '',
    foodName: 'Food 2 ',
    size: 'Large',
    status: 'Cancel',
    amount: 4,
  },
  {
    id: 3,
    imageUri: '',
    foodName: 'Food 3 ',
    size: 'Medium',
    status: 'Complete',
    amount: 7,
  },
];

type ThisProps = {
  navigation: any;
};

export default function OnGoingTab(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <OnGoingList data={listCart} navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
