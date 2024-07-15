import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsRepeat = () => {
  const styles = useStyles();
  return (
    <View style={styles.alarmSettingsRepeatContainer}>
      <View style={styles.alarmSettingsRepeatOptionsContainer}>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Monday</Text>
        </View>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Tuesday</Text>
        </View>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Wednesday</Text>
        </View>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Thursday</Text>
        </View>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Friday</Text>
        </View>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Saturday</Text>
        </View>
        <View style={styles.alarmSettingsRepeatOption}>
          <Text style={styles.bottomSheetText}>Every Sunday</Text>
        </View>
      </View>
    </View>
  );
};

export default AlarmSettingsRepeat;
