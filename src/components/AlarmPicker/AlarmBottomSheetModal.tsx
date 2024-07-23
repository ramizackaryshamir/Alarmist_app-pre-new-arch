import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import TimePicker from './TimePicker';
import {useStyles} from '../../hooks/useStyles';
import AlarmSettingsSnoozeOption from './AlarmSettingsSnoozeOption';

interface Navigation {
  navigation: {
    navigate: (arg0: {name: string; params: any}) => void;
    push: (arg0: string) => void;
  };
}
interface Route {
  route: string;
  params: any;
}

const AlarmBottomSheetModal = ({navigation}: Navigation, route: Route) => {
  const styles = useStyles();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const [alarmSettings, setAlarmSettings] = useState<any>({
    alarmTime: '',
    alarmRepeat: [],
    alarmName: '',
    alarmSound: '',
    isSnoozed: isEnabled,
  });

  const toggleSwitch = () => {
    setIsEnabled((prevState: boolean) => !prevState);
    console.log('isEnabkled', isEnabled);
  };

  useEffect(() => {
    //Params 1/2:
    //Screen receives params data from AlarmSettingsRepeatOptionsScreen and sets data to alarmSettinngs

    if (route.params?.alarmRepeat) {
      setAlarmSettings({
        alarmRepeat: alarmSettings.alarmRepeat,
        alarmName: alarmSettings.alarmName,
        alarmSound: alarmSettings.alarmSound,
        isSnoozed: alarmSettings.isSnoozed,
      });
    }
    //Screen receives params data from AlarmSettingsSoundOptionsScreen and sets data to alarmSettinngs
    if (route.params?.alarmSound) {
      setAlarmSettings({
        alarmRepeat: alarmSettings.alarmRepeat,
        alarmName: alarmSettings.alarmName,
        alarmSound: alarmSettings.alarmSound,
        isSnoozed: alarmSettings.isSnoozed,
      });
    }
    //default action
    setAlarmSettings({
      alarmRepeat: alarmSettings.alarmRepeat,
      alarmName: alarmSettings.alarmName,
      alarmSound: alarmSettings.alarmSound,
      isSnoozed: isEnabled,
    });
  }, [route.params?.alarmRepeat, route.params?.alarmSound]);

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
          onChangeText={(value) => setAlarmSettings({alarmName: value})}
          value={alarmSettings.alarmName}
        />

        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.push('Sound');
          }}
        >
          <Text style={styles.bottomSheetText}>Sound</Text>
        </TouchableOpacity>
        <AlarmSettingsSnoozeOption
          option={{label: 'Snooze', value: isEnabled}}
          onToggle={toggleSwitch}
        />
      </View>
      {/*Params 2/2: Screen passes params data back to Home Screen*/}
      <TouchableOpacity
        style={{width: 50, height: 50, backgroundColor: 'blue'}}
        onPress={() => {
          console.log('alarmSettings:', alarmSettings);
          navigation.navigate({
            name: 'Home',
            params: {alarmSettings: alarmSettings},
          });
        }}
      />
    </View>
  );
};

export default AlarmBottomSheetModal;
