import React, {useEffect, useState, useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {showLocalTime} from '../../lib/utils';
import {useStyles} from './useStyles';

const DigitalClock = ({navigation, route}) => {
  const styles = useStyles();
  const [localTime, setLocalTime] = useState({
    hour: '',
    minute: '',
    second: '',
  });
  useEffect(() => {
    const {hour, minute, second} = showLocalTime();

    const time = setTimeout(() => {
      setLocalTime({
        hour: hour,
        minute: minute,
        second: second,
      });
    }, 1000);
    return () => clearTimeout(time);
  }, [localTime.hour, localTime.minute, localTime.second]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.clockContainer}>
        <View style={styles.clockTop}>
          <Text style={styles.clockText}>{localTime.hour}</Text>
          <Text style={styles.clockText}>{localTime.minute}</Text>
        </View>
        <View style={styles.clockBottom}>
          <Text style={styles.clockText}>{localTime.second}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DigitalClock;
