import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyles} from '../hooks/useStyles';
import {AlarmProps} from './types';

const Alarm = ({
  alarmWeekday,
  alarmDate,
  alarmTime,
  alarmRepeat,
  alarmName,
  option,
  onToggleAlarm,
}: AlarmProps) => {
  //This component DISPLAYS how the alarm will render to the UI. Sound and isSNoozed props aren't needed 08/29/2024
  const styles = useStyles();
  console.group('\x1b[32m');
  console.log('Alarm Option');
  console.log('option.value', option.value);
  console.groupEnd();
  return (
    <View style={styles.alarmContainer}>
      <View style={styles.alarmContainerLeft}>
        <View style={styles.alarmContainerLeftTop}>
          <Text style={styles.alarmTextLeftTop}>{alarmWeekday}</Text>
          <Text style={styles.alarmTextLeftTop}>{alarmDate}</Text>
        </View>
        <View style={styles.alarmContainerLeftBottom}>
          <Text style={styles.alarmTextLeftBottom}>{alarmName}</Text>
          <Text style={styles.alarmTextLeftBottom}>{alarmRepeat}</Text>
        </View>
      </View>
      <View style={styles.alarmContainerRight}>
        <Text style={styles.alarmTextRight}>{alarmTime}</Text>
        <Switch
          style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
          onValueChange={onToggleAlarm}
          value={option.value}
        />
      </View>
    </View>
  );
};

export default Alarm;
