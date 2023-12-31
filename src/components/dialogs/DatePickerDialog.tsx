import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {View} from 'react-native';
import {TextLink} from '../texts/TextLink';

type OnSelectedDate = (date: Date) => void;

type ThisProps = {
  onSelectedDate: OnSelectedDate;
  date: Date;
  iconColor?: string;
  iconSize?: number;
};

export function DatePickerDialog(props: ThisProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const now = new Date();
    let currentDate;
    if (selectedDate <= now) {
      currentDate = now;
    } else currentDate = selectedDate || props.date;

    setVisible(false);
    props.onSelectedDate(currentDate);
  };

  const openDialog = () => {
    setVisible(true);
  };

  return (
    <View>
      <TextLink onPress={openDialog}>Choose time</TextLink>

      {visible && (
        <DateTimePicker
          value={props.date}
          mode="time"
          display="default"
          minimumDate={new Date()}
          onChange={onChange}
        />
      )}
    </View>
  );
}
