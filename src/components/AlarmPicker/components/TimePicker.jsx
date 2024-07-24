import React, {useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useStyles} from '../../../hooks/useStyles';

const TimePicker = () => {
  //const [isOpen, setIsOpen] = useState(true);
  const [alarmTime, setAlarmTime] = useState(new Date());
  const styles = useStyles();

  console.group('\x1b[44m');
  console.log('alarmTime: ', alarmTime);
  console.groupEnd();
  //
  //TODO: NOTE: NewAlarm logic should be abstracted from TimePicker to its own component 07172024
  //
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
        style={{width: 30, height: 20, backgroundColor: 'white'}}
        title="Open"
        onPress={() => setAlarmTime(alarmTime)}
        //style={styles.alarmPickerButton}
      />
      <DatePicker
        //open={isOpen}
        date={alarmTime}
        onDateChange={(value) => {
          //setIsOpen(false);
          setAlarmTime(value);
        }}
        title="Alarm"
      />
    </>
  );
};

export default TimePicker;
