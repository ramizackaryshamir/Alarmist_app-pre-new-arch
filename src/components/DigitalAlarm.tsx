import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../hooks/useStyles';

const DigitalAlarm = ({weekday, date, time}) => {
  const styles = useStyles();

  return (
    <View style={styles.digitalAlarmContainer}>
      <View style={styles.digitalAlarmRight}>
        <Text style={styles.digitalAlarmText}>{weekday}</Text>
        <Text style={styles.digitalAlarmText}>{date}</Text>
      </View>
      {/*<Text style={styles.digitalAlarmText}>{time}</Text>*/}
    </View>
  );
};
export default DigitalAlarm;
