import React, {useState, useEffect} from 'react';
import {View, FlatList, Button} from 'react-native';
import Menu from '../components/Menu';
import Alarm from '../components/Alarm';
import {useStyles} from '../hooks/useStyles';
import {NewAlarm} from './types';
import DigitalAlarm from '../components/DigitalAlarm';

const HomeScreen = ({navigation, route}) => {
  const styles = useStyles();

  const [newAlarm, setNewAlarm] = useState<NewAlarm>({
    weekday: '',
    date: '',
    time: '',
    repeat: [],
    name: '',
    sound: [],
    isSnoozed: false,
  });
  console.log('weekday', newAlarm.weekday);
  console.log('date', newAlarm.date);
  console.log('time', newAlarm.time);
  const [alarms, setAlarms] = useState<any>([]);

  const [isActive, setIsActive] = useState<boolean>(true);

  const handleToggleAlarm = () => {
    setIsActive((prevState: boolean) => !prevState);
  };

  const navigateToAlarmSettingsScreen = () => {
    navigation.navigate('Alarm Settings Screen', {
      onGoBack: (data) => {
        setNewAlarm({
          weekday: data.alarmTime.slice(0, 3),
          date: data.alarmTime.slice(4, 15),
          time: data.alarmTime.slice(16, 21),
          repeat: data.alarmRepeat,
          name: data.alarmName ? data.alarmName : 'Alarm',
          sound: data.alarmSound,
          isSnoozed: data.isSnoozed,
        });
      },
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="+" onPress={navigateToAlarmSettingsScreen} />
      ),
    });
  }, [navigation]);

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
        <FlatList
          contentContainerStyle={styles.alarmsContainer}
          data={alarms}
          renderItem={({item}) => (
            <Alarm
              alarmWeekday={item.weekday}
              alarmDate={item.date}
              alarmTime={item.time}
              alarmRepeat={item.repeat}
              alarmName={item.name}
              alarmSound={item.sound}
              alarmIsActive={isActive}
              onToggleAlarm={handleToggleAlarm}
            />
          )}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
