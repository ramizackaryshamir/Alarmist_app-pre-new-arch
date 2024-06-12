import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import DigitalCLock from '../components/DigitalClock';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <Text>Home</Text>
        <DigitalCLock />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
