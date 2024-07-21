import React from 'react';
import {View} from 'react-native';
import {useStyles} from '../../hooks/useStyles';
import AlarmSettingsRepeatOptions from './AlarmSettingsRepeatOptions';
const AlarmSettingsRepeatOptionScreen = () => {
  const styles = useStyles();
  return (
    <View style={styles.alarmSettingsRepeatOptionsPageContainer}>
      <AlarmSettingsRepeatOptions />
    </View>
  );
};

export default AlarmSettingsRepeatOptionScreen;
