import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyles} from '../hooks/useStyles';
import {AlarmProps} from './types';

const Alarm = ({
  alarmWeekday,
  alarmDate,
  alarmTime,
  alarmName,
  alarmRepeat,
  isActive,
  toggleAlarm,
}: AlarmProps) => {
  //This component displays how the alarm will render to the UI
  const styles = useStyles();

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
          onValueChange={toggleAlarm}
          value={isActive}
        />
      </View>
    </View>
  );
};

export default Alarm;
