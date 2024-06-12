import React, {useState, useEffect} from 'react'; //{useEffect, useState}
import {SafeAreaView, View, Text} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';
//import {fetchAllTimes} from '../lib/utils';

const DigitalCLock = () => {
  useEffect(() => {
    const fetchAllTimes = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      )
        .then((res) => res.json())
        .then((body) => console.log(body))
        .catch((error) => {
          console.log(error);
        });

      return response;
    };
    fetchAllTimes();
  });
  return (
    <SafeAreaView>
      <View>
        <Text>
          Time
          {/*{localTime}*/}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DigitalCLock;
