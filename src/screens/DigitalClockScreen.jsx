import React from 'react';
import {SafeAreaView, View} from 'react-native';
import DigitalClock from '../components/DigitalClock/DigitalClock';
import {useStyles} from './useStyles';

const DigitalClockScreen = ({navigation}) => {
  const styles = useStyles();

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.digitalClockScreenContainer}>
          <DigitalClock />
        </View>
      </SafeAreaView>
    </>
  );
};

export default DigitalClockScreen;
