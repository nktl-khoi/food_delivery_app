import {StyleSheet, View} from 'react-native';
import React from 'react';
import HistoryOrderList from '../../display/HistoryOrderList';

const listHistory = [
  {
    id: 1,
    imageUri: '',
    foodName: 'Food 1 ',
    date: 'November 28, 2023',
    priceValue: 12.3,
  },
  {
    id: 2,
    imageUri: '',
    foodName: 'Food 2 ',
    date: 'November 29, 2023',
    priceValue: 1.3,
  },
  {
    id: 3,
    imageUri: '',
    foodName: 'Food 3 ',
    date: 'November 30, 2023',
    priceValue: 2.3,
  },
];

type ThisProps = {
  navigation: any;
};

export default function HistoryOrderTab(props: ThisProps): JSX.Element {
  return (
    <View style={styles.container}>
      <HistoryOrderList data={listHistory} navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
