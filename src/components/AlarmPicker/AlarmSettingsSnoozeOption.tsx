import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

type Option = {
  label: string;
  value: boolean;
};
interface SnoozeOptionsProps {
  option: Option;
  onToggle: any;
}

const AlarmSettingsSnoozeOption = ({option, onToggle}: SnoozeOptionsProps) => {
  const styles = useStyles();
  console.log('option.value', option.value);
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
