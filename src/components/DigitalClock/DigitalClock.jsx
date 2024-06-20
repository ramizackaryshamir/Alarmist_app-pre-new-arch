import React, {useEffect, useState, useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {showLocalTime} from '../../lib/utils';
import {useStyles} from './useStyles';
import {useTime} from '../useTime';

const DigitalClock = ({navigation, route}) => {
  const styles = useStyles();
  const localTime = useTime();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.clockContainer}>
        <View style={styles.clockRight}>
          <Text style={styles.clockText}>{localTime.hour}</Text>
          <Text style={styles.clockText}>{localTime.minute}</Text>
        </View>
        <View style={styles.clockLeft}>
          <Text style={styles.clockText}>{localTime.second}</Text>
        </View>
      </View>
    </View>
  );
};
export default DigitalClock;
