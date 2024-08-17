import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

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
    time: '',
    repeat: [],
    name: '',
    sound: [],
    isSnoozed: false,
  });

  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    console.log(route);
  });

  console.group('\x1b[46m');
  console.log('Home Screen');
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
        {/*//*/}
        {/*//*/}
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.homeScreenAddAlarmButton}
          onPress={() => {
            navigation.navigate('Alarm Settings Screen', {
              onGoBack: (data: any) => {
                setNewAlarm({
                  time: data.alarmTime,
                  repeat: data.alarmRepeat,
                  name: data.alarmName,
                  sound: data.alarmSounf,
                  isSnoozed: data.isSnoozed,
                });
              },
            });
          }}
        />
        {/*//*/}
        {/*//*/}
        {/*//*/}
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;