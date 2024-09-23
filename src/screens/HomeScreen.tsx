import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, FlatList, Button, Alert, PanResponder} from 'react-native';
import Menu from '../components/Menu';
import Alarm from '../components/Alarm';
import {useStyles} from './hooks/useStyles';
import {NewAlarm} from './types';

const HomeScreen = ({navigation, route}: any) => {
  const styles = useStyles();
  const panResponder = useRef(
    PanResponder.create({
      //executed anytime a user taps on the screen onStartShouldSetPanResponder() is called
      onStartShouldSetPanResponder: () => true,
      //callback called anytime a user starts to drag their finger around the screen
      onPanResponderMove: (event, gesture) => {
        console.log('gesture: ', gesture);
      },
      //executed anytime a user removes their finger from the screen: final callbacks like 'reset the position'
      onPanResponderRelease: () => {},
    }),
  ).current;

  //setNewAlarm will render CSS and/or values to UI.
  const [newAlarm, setNewAlarm] = useState<NewAlarm>({
    weekday: '',
    date: '',
    time: '',
    repeat: [],
    name: '',
    sound: '',
    isSnoozed: false,
    id: '',
  });
  const [alarms, setAlarms] = useState<Array<NewAlarm>>([]);
  const [alarmIsEnabled, setAlarmIsEnabled] = useState<any>({});

  const toggleEnable = (id: string) => {
    console.log('id: ', id);
    console.log('{[id]: !alarmIsEnabled[id]}: ', {[id]: !alarmIsEnabled[id]});
    setAlarmIsEnabled({
      ...alarmIsEnabled,
      [id]: !alarmIsEnabled[id],
    });
  };

  console.log('newAlarm.time: ', newAlarm.time.slice(3, 5));
  const navigateToAlarmSettingsScreen = useCallback(() => {
    navigation.navigate('Alarm Settings Screen', {
      onGoBack: (data) => {
        setNewAlarm({
          weekday: data.newAlarmTime.slice(0, 3),
          date: data.newAlarmTime.slice(4, 15),
          time: data.newAlarmTime.slice(16, 21),
          repeat: data.newAlarmRepeat,
          name: data.newAlarmName ? data.newAlarmName : 'Alarm',
          sound: data.newAlarmSound,
          isSnoozed: data.isNewAlarmSnoozed,
          id: data.newAlarmId,
        });
      },
    });
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="+" onPress={navigateToAlarmSettingsScreen} />
      ),
    });
  }, [navigation, navigateToAlarmSettingsScreen]);

  useEffect(() => {
    if (route.params?.newAlarmTime) {
      setAlarms((alarms) => [...alarms, newAlarm]);
    }
    //console.group('\x1b[40m');
    //console.log('Home route', route.params?.newAlarmTime);
    //console.groupEnd();
  }, [route.params?.newAlarmTime, newAlarm]);

  useEffect(() => {
    const checkAlarm = setInterval(() => {
      const currentTime = new Date();
      if (
        alarmIsEnabled[newAlarm.id] === true &&
        currentTime.getHours().toString() === newAlarm.time.slice(0, 2) &&
        currentTime.getMinutes().toString() === newAlarm.time.slice(3, 5)
      ) {
        Alert.alert('Alarm');
        clearInterval(checkAlarm);
      }
    }, 1000);
    return () => clearInterval(checkAlarm);
  }, [alarmIsEnabled]);

  //console.group('\x1b[46m');
  //console.log('Home Screen');
  //console.log('alarms', alarms);
  //console.log('newAlarm.time:', newAlarm.time);
  //console.log('newAlarm.repeat:', newAlarm.repeat);
  //console.log('newAlarm.name:', newAlarm.name);
  //console.log('newAlarm.sound:', newAlarm.sound);
  //console.log('newAlarm.isSnoozed:', newAlarm.isSnoozed);
  //console.log('newAlarm.id:', newAlarm.id);
  //console.groupEnd();

  const handleDelete: any = (id: string) => {
    const updatedAlarms = alarms.filter((alarm) => alarm.id !== id);
    setAlarms(updatedAlarms);
  };
  return (
    <>
      <View style={styles.homeScreenContainer}>
        {/*//*/}
        {/*TODO This Button Goes Forward*/}
        <FlatList
          contentContainerStyle={styles.alarmsContainer}
          //data renders alarms each time because javascript equates by reference and each alarms array obj is a new obj even if none of the data has changed
          data={alarms}
          renderItem={({item}) => (
            <>
              <View {...panResponder.panHandlers}>
                <Alarm
                  key={item.id}
                  id={item.id}
                  alarmWeekday={item.weekday}
                  alarmDate={item.date}
                  alarmTime={item.time}
                  alarmRepeat={item.repeat}
                  alarmName={item.name}
                  alarmSound={item.sound}
                  onToggle={() => toggleEnable(item.id)}
                  alarmIsEnabled={alarmIsEnabled[item.id]}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Button title="Delete" onPress={() => handleDelete(item.id)} />
              </View>
            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
