import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../hooks/useStyles';
import {useTime} from '../hooks/useTime';

const ScreenClock = () => {
  const styles = useStyles();
  const localTime = useTime();

  const [allTimes, setAllTimes] = useState({
    countryName: '',
    timeStamp: '',
  });

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

  return (
    <View style={styles.screenClockContainer}>
      <View style={styles.screenClockTop}>
        <Text style={styles.screenClockText}>{localTime.hour}</Text>
        <Text style={styles.screenClockText}>{localTime.minute}</Text>
      </View>
      <View style={styles.screenClockBottom}>
        <Text style={styles.screenClockText}>{localTime.second}</Text>
      </View>
    </View>
  );
};

export default ScreenClock;
