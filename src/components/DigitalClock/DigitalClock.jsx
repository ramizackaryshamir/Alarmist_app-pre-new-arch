import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
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
    const time = setTimeout(() => {
      setLocalTime(showLocalTime());
    }, 1000);
    return () => clearTimeout(time);
  }, [localTime.hour, localTime.minute, localTime.second]);
  console.log(localTime);
  return (
    <>
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>
          {localTime.hour} {localTime.minute} {localTime.second}
        </Text>
      </View>
    </>
  );
};

export default DigitalCLock;
