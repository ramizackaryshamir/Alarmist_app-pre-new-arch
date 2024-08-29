import React from 'react';
import DatePicker from 'react-native-date-picker';

type TimePickerProps = {
  newAlarmTime: any;
  onChange: any;
};

const TimePicker = ({newAlarmTime, onChange}: TimePickerProps) => {
  //console.group('\x1b[44m');
  //console.log('Time Picker');
  //console.log('alarmTime: ', alarmTime, typeof alarmTime);
  //console.groupEnd();
  //
  //TODO: NOTE: NewAlarm logic should be abstracted from TimePicker to its own component 07172024
  //TODO NOTE: Most likely to Home Screen component 07242024
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
      <DatePicker date={newAlarmTime} onDateChange={onChange} title="Alarm" />
    </>
  );
};

export default TimePicker;
