import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useStyles} from '../hooks/useStyles';

const Alarm = ({alarmTime, alarmName, alarmRepeat}) => {
  const styles = useStyles();

  return (
    <View style={styles.alarmContainer}>
      <Text>{alarmTime}</Text>
      <Text>{alarmName}</Text>
      <Text>{alarmRepeat}</Text>
    </View>
  );
};

export default Alarm;
