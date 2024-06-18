import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Block from '../Block/Block';
import {showLocalTime} from '../../lib/utils';
import {useStyles} from './useStyles';

const DigitalCLock = () => {
  const [localTime, setLocalTime] = useState({
    hour: '',
    minute: '',
    second: '',
  });
  const [allTimes, setAllTimes] = useState({
    countryName: '',
    timeStamp: '',
  });
  const styles = useStyles();
  useEffect(() => {
    const fetchAllTimes = async () => {
      const response = await fetch(
        'https://api.timezonedb.com/v2.1/list-time-zone?key=2H337C01C21J&format=json',
        {
          method: 'GET',
        },
      ).then((res) => {
        return res.ok
          ? Promise.resolve(res)
          : Promise.reject(new Error(res.statusText));
      });

      const data = await response
        .json()
        .then((body) => setAllTimes(body))
        .catch((error) => console.log(error));

      return data;
    };
    fetchAllTimes();
  }, []);

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

  console.log(localTime);

  return (
    <>
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
    </>
  );
};

export default DigitalCLock;
