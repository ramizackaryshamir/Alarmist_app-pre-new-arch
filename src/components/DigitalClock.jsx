import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../hooks/useStyles';
import {useTime} from '../hooks/useTime';

const DigitalClock = ({navigation, route}) => {
  const styles = useStyles();
  const localTime = useTime();

  return (
    <View style={styles.digitalClockContainer}>
      <View style={styles.digitalClockRight}>
        <Text style={styles.digitalClockText}>{localTime.hour}</Text>
        <Text style={styles.digitalClockText}>{localTime.minute}</Text>
      </View>
      <Text style={styles.digitalClockText}>{localTime.second}</Text>
    </View>
  );
};
export default DigitalClock;
