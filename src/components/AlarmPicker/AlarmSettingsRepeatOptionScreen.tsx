import React, {useRef, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStyles} from '../../hooks/useStyles';
import AlarmSettingsRepeatOptions from './AlarmSettingsRepeatOptions';
const AlarmSettingsRepeatOptionScreen = () => {
  const styles = useStyles();
  return (
    <View style={styles.alarmSettingsRepeatPageContainer}>
      <AlarmSettingsRepeatOptions />
    </View>
  );
};

export default AlarmSettingsRepeatOptionScreen;
