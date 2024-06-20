import React from 'react';
import {SafeAreaView, View} from 'react-native';
import ScreenClock from '../components/ScreenClock/ScreenClock';
import {useStyles} from './useStyles';

const ScreenClockScreen = ({navigation}) => {
  const styles = useStyles();

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screenClockScreenContainer}>
          <ScreenClock />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ScreenClockScreen;
