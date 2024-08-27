import React, {useState, useEffect} from 'react';
import {View, FlatList, Button} from 'react-native';
import Menu from '../components/Menu';
import Alarm from '../components/Alarm';
import {useStyles} from '../hooks/useStyles';
import {NewAlarm} from './types';

const HomeScreen = ({navigation, route}) => {
  const styles = useStyles();

  const [newAlarm, setNewAlarm] = useState<NewAlarm>({
    weekday: '',
    date: '',
    time: '',
    repeat: [],
    name: 'Alarm',
    sound: [],
    isSnoozed: false,
    id: '',
  });
  console.log('weekday', newAlarm.weekday);
  console.log('date', newAlarm.date);
  console.log('time', newAlarm.time);
  const [alarms, setAlarms] = useState<any>([]);

  const navigateToAlarmSettingsScreen = () => {
    navigation.navigate('Alarm Settings Screen', {
      onGoBack: (data) => {
        setNewAlarm({
          weekday: data.alarmTime.slice(0, 3),
          date: data.alarmTime.slice(4, 15),
          time: data.alarmTime.slice(16),
          repeat: data.alarmRepeat,
          name: data.alarmName,
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

        {/*<View style={styles.alarmsContainer}>
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
      </View>*/}

        <FlatList
          data={alarms}
          renderItem={({item}) => (
            <Alarm
              alarmDate={item.date}
              alarmTime={item.time}
              alarmName={item.name}
              alarmRepeat={item.repeat}
            />
          )}
          //keyExtractor={(item) => item.id}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
