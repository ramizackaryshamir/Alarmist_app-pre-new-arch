import React from 'react';
import {View, Text} from 'react-native';
import Modal from './Modal/Modal';
import {useStyles} from '../hooks/useStyles';
import {useTime} from '../hooks/useTime';

const DigitalClock = () => {
  const styles = useStyles();
  const localTime = useTime();

  return (
    <>
      <View style={styles.digitalClockContainer}>
        <View style={styles.digitalClockRight}>
          <Text style={styles.digitalClockText}>{localTime.hour}</Text>
          <Text style={styles.digitalClockText}>{localTime.minute}</Text>
        </View>
        <Text style={styles.digitalClockText}>{localTime.second}</Text>
      </View>
      <Modal />
    </>
  );
};
export default DigitalClock;
