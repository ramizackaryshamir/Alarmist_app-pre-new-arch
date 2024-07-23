import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsSnoozeOption = ({option}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(option.value);

  const styles = useStyles();

  const toggleSwitch = () => {
    setIsEnabled((prevState: boolean) => !prevState);
  };
  return (
    <>
      <View style={styles.bottomSheetSwitchView}>
        <Text style={styles.bottomSheetText}>Snooze</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </>
  );
};

export default AlarmSettingsSnoozeOption;
