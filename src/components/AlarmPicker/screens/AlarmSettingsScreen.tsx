import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import TimePicker from '../components/TimePicker';
import AlarmSettingsSnoozeOption from '../components/AlarmSettingsSnoozeOption';
import {useStyles} from '../../../hooks/useStyles';
interface Navigation {
  navigation: {
    navigate: any;
  };
}
interface Route {
  route: string;
  params: any;
}

const AlarmSettingsScreen = ({navigation}: Navigation, route: Route) => {
  const styles = useStyles();

  const [alarmTime, setAlarmTime] = useState<string>('');
  const [alarmSound, setAlarmSound] = useState<string>('');

  const [alarmRepeat, setAlarmRepeat] = useState<Array<string>>([]);
  const [alarmName, setAlarmName] = useState<string>('');
  const [isSnoozed, setIsSnoozed] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsSnoozed((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    //Params 1a/2:
    //Screen receives params data from AlarmSettingsRepeatOptionsScreen and sets data to alarmSettinngs
    if (route.params?.alarmRepeat) {
      setAlarmRepeat(alarmRepeat);
    }
    //Params 1b/2:
    //Screen receives params data from AlarmSettingsSoundOptionsScreen and sets data to alarmSettinngs
    if (route.params?.alarmSound) {
      setAlarmSound(alarmSound);
    }
  }, [
    route.params?.alarmRepeat,
    route.params?.alarmSound,
    alarmRepeat,
    alarmSound,
  ]);

  return (
    <View style={styles.bottomSheetContainer}>
      <TimePicker />
      <View style={styles.bottomSheetSettings}>
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.navigate('Repeat', {
              onGoBack: (data: Array<string>) => {
                setAlarmRepeat(data);
              },
            });
          }}
        >
          <Text style={styles.bottomSheetText}>Repeat</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.bottomSheetInput}
          placeholder="Alarm"
          onChangeText={(value) => setAlarmName(value)}
          value={alarmName}
        />
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.navigate('Sound', {
              onGoBack: (data: string) => {
                setAlarmSound(data);
              },
            });
          }}
        >
          <Text style={styles.bottomSheetText}>Sound</Text>
        </TouchableOpacity>
        <AlarmSettingsSnoozeOption
          option={{label: 'Snooze', value: isSnoozed}}
          onToggle={toggleSwitch}
        />
      </View>
      {/*Params 2/2: Screen passes params data back to Home Screen*/}
      <TouchableOpacity
        style={{width: 50, height: 50, backgroundColor: 'blue'}}
        onPress={() => {
          console.group('\x1b[42m');
          console.log('alarmTime:', alarmTime);
          console.log('alarmRepeat:', alarmRepeat);
          console.log('alarmName:', alarmName);
          console.log('alarmSound:', alarmSound);
          console.log('isSnoozed:', isSnoozed);
          console.groupEnd();
          navigation.navigate({
            name: 'Home',
            params: {
              alarmTime: alarmTime,
              alarmRepeat: alarmRepeat,
              alarmName: alarmName,
              alarmSound: alarmSound,
              isSnoozed: isSnoozed,
            },
          });
        }}
      />
    </View>
  );
};

export default AlarmSettingsScreen;
