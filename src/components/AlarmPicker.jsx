import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
const AlarmPicker = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [time, setTime] = useState(new Date());
  return (
    <>
      <Button title="Open" onPress={() => setIsOpen(true)} />
      <DatePicker
        modal
        open={isOpen}
        date={time}
        onConfirm={(value) => {
          setIsOpen(false);
          setTime(value);
        }}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};

export default AlarmPicker;
