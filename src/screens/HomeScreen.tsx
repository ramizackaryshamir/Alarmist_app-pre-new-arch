import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, Button} from 'react-native';
import Menu from '../components/Menu';
import Alarm from '../components/Alarm';
import {useStyles} from '../hooks/useStyles';
import {NewAlarm} from './types';

const HomeScreen = ({navigation, route}: any) => {
  const styles = useStyles();
  const [newAlarm, setNewAlarm] = useState<NewAlarm>({
    weekday: '',
    date: '',
    time: '',
    repeat: [],
    name: '',
    sound: '',
    isSnoozed: false,
    id: '',
    //this state needs to be fixed 08/29/2024
    isActive: false,
  });
  const [alarms, setAlarms] = useState<Array<NewAlarm>>([]);

  //const handleToggleAlarm = () => {
  //  (prevState: boolean) => setNewAlarm({...newAlarm, isActive: !prevState});
  //};

  const handleToggleAlarm = () => {
    setNewAlarm(({isActive}) => ({
      ...newAlarm,
      isActive: !isActive,
    }));
  };

  const navigateToAlarmSettingsScreen = useCallback(() => {
    navigation.navigate('Alarm Settings Screen', {
      onGoBack: (data: any) => {
        setNewAlarm({
          weekday: data.newAlarmTime.slice(0, 3),
          date: data.newAlarmTime.slice(4, 15),
          time: data.newAlarmTime.slice(16, 21),
          repeat: data.newAlarmRepeat,
          name: data.newAlarmName ? data.newAlarmName : 'Alarm',
          sound: data.newAlarmSound,
          isSnoozed: data.isNewAlarmSnoozed,
          id: data.newAlarmId,
          //this state needs to be fixed 08/29/2024
          isActive: newAlarm.isActive,
        });
        console.log('newAlarm.isActive,:,', newAlarm.isActive);
      },
    });
  }, [navigation, newAlarm.isActive]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="+" onPress={navigateToAlarmSettingsScreen} />
      ),
    });
  }, [navigation, navigateToAlarmSettingsScreen]);

  useEffect(() => {
    //if (route.params?.newAlarmName) {
    //  setAlarms([newAlarm, ...alarms]);
    //}
    if (route.params?.newAlarmTime) {
      setAlarms([newAlarm, ...alarms]);
    }
  }, [route.params?.newAlarmTime, newAlarm]);

  console.group('\x1b[40m');
  console.log('Home route', route);
  console.groupEnd();
  console.group('\x1b[46m');
  console.log('Home Screen');
  //console.log('alarms', alarms);
  console.log('newAlarm.time:', newAlarm.time);
  console.log('newAlarm.repeat:', newAlarm.repeat);
  console.log('newAlarm.name:', newAlarm.name);
  console.log('newAlarm.sound:', newAlarm.sound);
  console.log('newAlarm.isSnoozed:', newAlarm.isSnoozed);
  console.log('newAlarm.id:', newAlarm.id);
  //this state needs to be fixed 08/29/2024
  console.log('newAlarm.isActve:', newAlarm.isActive);
  console.groupEnd();

  const arr = [
    {1: 1, 3: 1},
    {2: 2, 3: 2, 4: 2},
  ];
  return (
    <>
      <View style={styles.homeScreenContainer}>
        {/*//*/}
        {/*TODO This Button Goes Forward*/}
        <FlatList
          contentContainerStyle={styles.alarmsContainer}
          //data renders alarms each time because javascript equates by reference and each alarms obj is a new obj even if none of the data has changed
          //data={alarms.length !== 0 ? alarms : arr}
          data={route.params?.newAlarmTime ? alarms : null}
          renderItem={({item}) => (
            <Alarm
              key={item.id}
              alarmWeekday={item.weekday}
              alarmDate={item.date}
              alarmTime={item.time}
              alarmRepeat={item.repeat}
              alarmName={item.name}
              alarmSound={item.sound}
              //this state needs to be fixed 08/29/2024
              option={{value: item.isActive}}
              onToggleAlarm={handleToggleAlarm}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
