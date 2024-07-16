import React from 'react';
import {View} from 'react-native';
import AlarmSettingsRepeatOption from './AlarmSettingsRepeatOption';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsRepeat = () => {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const styles = useStyles();

  return (
    <View style={styles.alarmSettingsRepeatPageContainer}>
      <View style={styles.alarmSettingsRepeatOptionsContainer}>
        {weekdays.map((weekday, index) => {
          return <AlarmSettingsRepeatOption weekday={weekday} />;
        })}
      </View>
    </View>
  );
};

export default AlarmSettingsRepeat;
