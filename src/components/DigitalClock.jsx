import React, {useState, useEffect} from 'react'; //{useEffect, useState}
import {SafeAreaView, View, Text} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';
import {showLocalTime} from '../lib/utils';

const DigitalCLock = () => {
  const [localTime, setLocalTime] = useState('');
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

  useEffect(() => {
    const time = setTimeout(() => {
      setLocalTime(showLocalTime());
    }, 1000);
    return () => clearTimeout(time);
  }, [localTime]);

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>{localTime}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DigitalCLock;
