import React from 'react';
import {View} from 'react-native';
import ScreenClock from '../components/ScreenClock';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const ScreenClockScreen = ({navigation}: any) => {
  const styles = useStyles();

  return (
    <>
      <View style={styles.screenClockScreenContainer}>
        <ScreenClock />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default ScreenClockScreen;
