import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, FlatList, Button} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';
import Alarm from '../components/Alarm';
interface NewAlarm {
  time: string;
  repeat: Array<string>;
  name: string;
  sound: Array<string>;
  isSnoozed: boolean;
}

const HomeScreen = ({navigation, route}) => {
  const styles = useStyles();

  const [newAlarm, setNewAlarm] = useState<NewAlarm>({
    time: new Date().toString(),
    repeat: [],
    name: 'Alarm',
    sound: [],
    isSnoozed: false,
  });

  const [alarms, setAlarms] = useState<any>([]);

  const navigateToAlarmSettingsScreen = () => {
    navigation.navigate('Alarm Settings Screen', {
      onGoBack: (data) => {
        setNewAlarm({
          time: data.alarmTime,
          repeat: data.alarmRepeat,
          name: data.alarmName,
          sound: data.alarmSound,
          isSnoozed: data.isSnoozed,
        });
      },
    });
  };

  useEffect(() => {
    setAlarms([newAlarm, ...alarms]);

    console.log('route', route);
  }, [newAlarm, route]);

  console.group('\x1b[40m');
  console.log('route', route);
  console.groupEnd();
  console.group('\x1b[46m');
  console.log('Home Screen');
  console.log('alarms', alarms);
  console.log('newAlarm.time:', newAlarm.time);
  console.log('newAlarm.repeat:', newAlarm.repeat);
  console.log('newAlarm.name:', newAlarm.name);
  console.log('newAlarm.sound:', newAlarm.sound);
  console.log('newAlarm.isSnoozed:', newAlarm.isSnoozed);
  console.groupEnd();

  return (
    <>
      <View style={styles.homeScreenContainer}>
        {/*//*/}
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.homeScreenAddAlarmButton}
          onPress={navigateToAlarmSettingsScreen}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.alarmsContainer}>
        {alarms.map((alarm, index) => {
          return (
            <Alarm
              key={`${alarm.time}${index}`}
              alarmName={alarm.name}
              alarmTime={alarm.time}
              alarmRepeat={alarm.repeat}
            />
          );
        })}
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
