import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text, Switch} from 'react-native';
import TimePicker from './TimePicker';
import {useStyles} from '../../hooks/useStyles';

interface Navigation {
  navigation: {
    navigate: string;
    push: (arg0: string) => void;
  };
}
const AlarmBottomSheetModal = ({navigation}: Navigation) => {
  const styles = useStyles();
  const [alarmSettings, setAlarmSettings] = useState<any>({
    input: '',
    isEnabled: false,
  });

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsEnabled((prevState: boolean) => !prevState);
  };

  console.log('input', alarmSettings.input);

  return (
    <View style={styles.bottomSheetContainer}>
      <TimePicker />
      <View style={styles.bottomSheetSettings}>
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.push('Repeat');
          }}
        >
          <Text style={styles.bottomSheetText}>Repeat</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.bottomSheetInput}
          placeholder="Alarm"
          onChangeText={(value) => setAlarmSettings({input: value})}
          value={alarmSettings.input}
        />

        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.push('Sound');
          }}
        >
          <Text style={styles.bottomSheetText}>Sound</Text>
        </TouchableOpacity>
        <View style={styles.bottomSheetSwitchView}>
          <Text style={styles.bottomSheetText}>Snooze</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
    </View>
  );
};

export default AlarmBottomSheetModal;
