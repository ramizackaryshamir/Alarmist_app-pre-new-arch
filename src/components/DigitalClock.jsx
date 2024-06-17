import React, {useState, useEffect} from 'react'; //{useEffect, useState}
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';
import {showLocalTime} from '../lib/utils';

const useStyles = () => {
  const {width, height, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    clockContainer: {
      width: width,
      height: height * 0.5,
      backgroundColor: 'yellow',
    },
    clock: {
      //justifyContent: 'center',
      //alignItems: 'center',
      flex: 4,
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    clockText: {
      fontSize: 100,
      color: 'white',
    },
  });
  return styles;
};
const DigitalCLock = () => {
  //const [localTime, setLocalTime] = useState('');
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
        <View style={styles.clock}>
          <Text style={styles.clockText}>{localTime.hour}</Text>
          <Text style={styles.clockText}>{localTime.minute}</Text>
          <Text style={styles.clockText}>{localTime.second}</Text>
        </View>
      </View>
    </>
  );
};

export default DigitalCLock;
