import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import ScreenClock from '../components/ScreenClock';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const ScreenClockScreen = ({navigation}) => {
  const styles = useStyles();
  const {height, width} = useWindowDimensions();
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
