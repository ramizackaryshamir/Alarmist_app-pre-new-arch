import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useStyles} from '../../hooks/useStyles';

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [time, setTime] = useState(new Date());

  const styles = useStyles();
  return (
    <>
      <TouchableOpacity
        title="Open"
        onPress={() => setIsOpen(true)}
        style={styles.alarmPickerButton}
      />
      <DatePicker
        //modal
        open={isOpen}
        date={time}
        onConfirm={(value) => {
          setIsOpen(false);
          setTime(value);
        }}
        onCancel={() => setIsOpen(false)}
        title="Alarm"
      />
    </>
  );
};

export default TimePicker;
