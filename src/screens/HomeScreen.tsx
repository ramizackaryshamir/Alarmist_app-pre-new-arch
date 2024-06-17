import React from 'react';
import {View} from 'react-native';
import DigitalCLock from '../components/DigitalClock/DigitalClock';
import {useStyles} from './useStyles';

const HomeScreen = () => {
  //const {height, width} = useWindowDimensions();
  const styles = useStyles();
  return (
    <>
      <View style={styles.homeScreenContainer}>
        <DigitalCLock />
      </View>
    </>
  );
};

export default HomeScreen;
