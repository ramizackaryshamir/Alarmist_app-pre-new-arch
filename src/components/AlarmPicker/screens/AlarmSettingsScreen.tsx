import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Text, Button} from 'react-native';
import TimePicker from '../components/TimePicker';
import AlarmSettingsSnoozeOption from '../components/AlarmSettingsSnoozeOption';
import {useStyles} from '../../../hooks/useStyles';

const AlarmSettingsScreen = ({navigation, route}: any) => {
  //This component sets the state for the alarm
  const styles = useStyles();

  const [newAlarmTime, setNewAlarmTime] = useState<any>(new Date());
  const [newAlarmRepeat, setNewAlarmRepeat] = useState<Array<string>>([]);
  const [newAlarmName, setNewAlarmName] = useState<string>('');
  const [newAlarmSound, setNewAlarmSound] = useState<string>('');
  const [isNewAlarmSnoozed, setIsNewAlarmSnoozed] = useState<boolean>(false);

  const handleToggleSwitch = () => {
    setIsNewAlarmSnoozed((prevState: boolean) => !prevState);
  };

  const handleAlarmTimeChange = (value: any) => {
    setNewAlarmTime(value);
  };

  const navigateToRepeatOptionsScreen = () => {
    navigation.navigate('Repeat', {
      onGoBack: (data: Array<string>) => {
        console.log(data);
        setNewAlarmRepeat(data);
      },
    });
  };

  useEffect(() => {
    const handleSaveAndGoBackToHomeScreen = () => {
      route.params.onGoBack({
        newAlarmTime: newAlarmTime.toString(),
        newAlarmRepeat,
        newAlarmName,
        newAlarmSound,
        isNewAlarmSnoozed,
        newAlarmId: Math.random().toString(),
      });
      navigation.goBack();
    };
    console.group('\x1b[41m');
    console.log('Alarm Settings Screen');
    console.log('route in AlarmSettingsScreen', route.params);
    console.groupEnd();
    navigation.setOptions({
      headerRight: () => (
        <Button title="Save" onPress={handleSaveAndGoBackToHomeScreen} />
      ),
    });
  }, [
    navigation,
    newAlarmTime,
    newAlarmRepeat,
    newAlarmName,
    newAlarmSound,
    isNewAlarmSnoozed,
    route.params,
  ]);

  useEffect(() => {
    //Params 1a/2:
    //Screen receives params data from AlarmSettingsRepeatOptionsScreen and sets data to alarmSettinngs
    if (route.params?.newAlarmRepeat) {
      setNewAlarmRepeat(newAlarmRepeat);
    }
    //Params 1b/2:
    //Screen receives params data from AlarmSettingsSoundOptionsScreen and sets data to alarmSettinngs
    if (route.params?.newAlarmSound) {
      setNewAlarmSound(newAlarmSound);
    }

    console.group('\x1b[41m');
    console.log('Alarm Settings Screen');
    console.log('newAlarmTime:', newAlarmTime);
    console.log('newAlarmRepeat:', newAlarmRepeat);
    console.log('newAlarmName:', newAlarmName);
    console.log('newAlarmSound:', newAlarmSound);
    console.log('isNewAlarmSnoozed:', isNewAlarmSnoozed);
    console.groupEnd();
  }, [
    route.params?.newAlarmRepeat,
    route.params?.newAlarmSound,
    newAlarmRepeat,
    newAlarmSound,
    isNewAlarmSnoozed,
    newAlarmName,
    newAlarmTime,
  ]);

  return (
    <View style={styles.bottomSheetContainer}>
      <TimePicker
        newAlarmTime={newAlarmTime}
        onChange={handleAlarmTimeChange}
      />
      <View style={styles.bottomSheetSettings}>
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={navigateToRepeatOptionsScreen}
        >
          <Text style={styles.bottomSheetText}>Repeat</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.bottomSheetInput}
          placeholder="Alarm"
          onChangeText={(value) => setNewAlarmName(value)}
          value={newAlarmName}
        />
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.navigate('Sound', {
              onGoBack: (data: string) => {
                setNewAlarmSound(data);
              },
            });
          }}
        >
          <Text style={styles.bottomSheetText}>Sound</Text>
        </TouchableOpacity>
        <AlarmSettingsSnoozeOption
          option={{label: 'Snooze', value: isNewAlarmSnoozed}}
          onToggle={handleToggleSwitch}
        />
      </View>
    </View>
  );
};

export default AlarmSettingsScreen;
