import React from 'react';
import {View, Text, Switch, Button} from 'react-native';
import {useStyles} from './hooks/useStyles';
import {AlarmProps, GRE} from './types';

const Alarm = ({
  alarmWeekday,
  alarmDate,
  alarmTime,
  alarmRepeat,
  alarmName,
}: AlarmProps) => {
  //This component DISPLAYS how the alarm will render to the UI. Sound and isSNoozed props aren't needed 08/29/2024
  const styles = useStyles();
  //console.group('\x1b[32m');
  //console.log('Alarm Option');
  //console.log('option.value', option.value);
  //console.groupEnd();
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
      </View>
    </View>
  );
};

export default Alarm;
