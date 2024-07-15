import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsSound = () => {
  const styles = useStyles();
  return (
    <View style={styles.alarmSettingsSoundContainer}>
      <Text>Sound</Text>
    </View>
  );
};

export default AlarmSettingsSound;
