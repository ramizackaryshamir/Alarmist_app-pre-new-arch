import React, {useState} from 'react';
import {Text, Switch} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsSnoozeOption = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const styles = useStyles();

  const toggleSwitch = () => {
    setIsEnabled((prevState: boolean) => !prevState);
  };
  return (
    <>
      <Text style={styles.bottomSheetText}>Snooze</Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </>
  );
};

//export default AlarmSettingsSnoozeOption;
