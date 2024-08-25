import React, {useId} from 'react';

import {View, Text, TouchableHighlight} from 'react-native';
import {useStyles} from '../hooks/useStyles';

const Alarm = ({alarmTime, alarmName, alarmRepeat}) => {
  const styles = useStyles();
  const alarmId = useId();
  return (
    <View id={alarmId} style={styles.alarmContainer}>
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
