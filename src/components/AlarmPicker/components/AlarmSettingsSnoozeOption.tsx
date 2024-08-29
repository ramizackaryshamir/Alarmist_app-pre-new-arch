import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyles} from '../../../hooks/useStyles';

interface SnoozeOptionsProps {
  option: {label: string; value: boolean};
  onToggle: any;
}

const AlarmSettingsSnoozeOption = ({option, onToggle}: SnoozeOptionsProps) => {
  const styles = useStyles();
  //console.group('\x1b[100m');
  //console.log('Snooze Option');
  //console.log('option.value', option.value);
  //console.groupEnd();

  return (
    <>
      <View style={styles.bottomSheetSwitchView}>
        <Text style={styles.bottomSheetText}>{option.label}</Text>
        <Switch onValueChange={onToggle} value={option.value} />
      </View>
    </>
  );
};

export default AlarmSettingsSnoozeOption;
