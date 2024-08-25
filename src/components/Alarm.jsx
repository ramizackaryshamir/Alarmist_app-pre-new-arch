import React from 'react';

import {View, Text} from 'react-native';
import {useStyles} from '../hooks/useStyles';

const Alarm = ({alarmTime, alarmName, alarmRepeat}) => {
  //This component displays how the alarm will render to the UI
  const styles = useStyles();

  return (
    <View style={styles.alarmContainer}>
      <View style={styles.alarmContainerTop}>
        <Text style={styles.alarmTextTop}>{alarmTime}</Text>
      </View>
      <View style={styles.alarmContainerBottom}>
        <Text>{alarmName}</Text>
        <Text>{alarmRepeat}</Text>
      </View>
    </View>
  );
};

export default Alarm;
