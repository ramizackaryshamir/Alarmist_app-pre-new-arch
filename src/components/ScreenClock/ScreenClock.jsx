import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useStyles} from './useStyles';
import {useTime} from '../useTime';

const ScreenClock = () => {
  const styles = useStyles();
  const localTime = useTime();
  console.log(localTime.second);

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
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View Style={styles.screenContainer}>
          <View style={styles.clockContainer}>
            <View style={styles.clockTop}>
              <Text style={styles.clockText}>{localTime.hour}</Text>
              <Text style={styles.clockText}>{localTime.minute}</Text>
            </View>
            <View style={styles.clockBottom}>
              <Text style={styles.clockText}>{localTime.second}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ScreenClock;
