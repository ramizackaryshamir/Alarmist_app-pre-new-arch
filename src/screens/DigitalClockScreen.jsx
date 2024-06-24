import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import DigitalClock from '../components/DigitalClock';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const DigitalClockScreen = ({navigation}) => {
  const styles = useStyles();
  const {height, width} = useWindowDimensions();
  return (
    <>
      <View style={styles.digitalClockScreenContainer}>
        <DigitalClock />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default DigitalClockScreen;
