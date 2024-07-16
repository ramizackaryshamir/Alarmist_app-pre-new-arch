import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useStyles} from '../../hooks/useStyles';

const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [alarmTime, setAlarmTime] = useState(new Date());
  const styles = useStyles();

  console.log('alarmTime: ', alarmTime);

  //useEffect(() => {
  //  const checkAlarm = setInterval(() => {
  //    const currentTime = new Date();
  //    if (
  //      currentTime.getHours() === alarmTime.getHours() &&
  //      currentTime.getMinutes() === alarmTime.getMinutes()
  //    ) {
  //      Alert.alert('Alarm');
  //      clearInterval(checkAlarm);
  //    }
  //  }, 4000);
  //  return () => clearInterval(checkAlarm);
  //}, [alarmTime]);

  return (
    <>
      <TouchableOpacity
        title="Open"
        onPress={() => setIsOpen(true)}
        style={styles.alarmPickerButton}
      />
      <DatePicker
        open={isOpen}
        date={alarmTime}
        onConfirm={(value) => {
          setIsOpen(false);
          setAlarmTime(value);
        }}
        onCancel={() => setIsOpen(false)}
        title="Alarm"
      />
    </>
  );
};

export default TimePicker;
