import React from 'react';
import {View, Text} from 'react-native';
import Modal from './Modal/Modal';
import {useStyles} from '../hooks/useStyles';
import {useShowTime} from '../hooks/useShowTime';

const DigitalClock = () => {
  const styles = useStyles();
  const localTime = useShowTime();

  return (
    <>
      <View style={styles.digitalClockContainer}>
        <View style={styles.digitalClockRight}>
          <Text style={styles.digitalClockText}>{localTime.hour}</Text>
          <Text style={styles.digitalClockText}>{localTime.minute}</Text>
        </View>
        <Text style={styles.digitalClockText}>{localTime.second}</Text>
      </View>
      <View style={styles.settingsContainer}>
        <Modal />
        <Modal />
      </View>
    </>
  );
};
export default DigitalClock;
