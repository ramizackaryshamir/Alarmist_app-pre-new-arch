import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Text, Switch} from 'react-native';
import TimePicker from './TimePicker';
import {useStyles} from '../../hooks/useStyles';

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
  const [alarmSettings, setAlarmSettings] = useState<any>({
    alarmRepeat: [],
    alarmName: '',
    alarmSound: '',
    isSnoozed: false,
  });

  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsEnabled((prevState: boolean) => !prevState);
  };

  console.log('alarmName', alarmSettings.alarmName);

  useEffect(() => {
    if (route.params?.alarmRepeat) {
      //[] placeholder for variable selectedDays
      setAlarmSettings({alarmRepeat: []});
    }
    if (route.params?.alarmName) {
      setAlarmSettings({alarmName: ''});
    }
    if (route.params?.alarmSound) {
      //[] placeholder for variabl eselectedDays
      setAlarmSettings({alarmSound: ''});
    }
    if (route.params?.isSnoozed) {
      //[] placeholder for variabl eselectedDays
      setAlarmSettings({isSnoozed: true});
    }
  }, [
    route.params?.alarmRepeat,
    route.params?.alarmName,
    route.params?.alarmSound,
    route.params?.isSnoozed,
  ]);

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
        <View style={styles.bottomSheetSwitchView}>
          <Text style={styles.bottomSheetText}>Snooze</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
      <TouchableOpacity
        style={{width: 50, height: 50, backgroundColor: 'blue'}}
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {alarmRepeat: alarmSettings.alarmRepeat},
          });
        }}
      />
    </View>
  );
};

export default AlarmBottomSheetModal;
