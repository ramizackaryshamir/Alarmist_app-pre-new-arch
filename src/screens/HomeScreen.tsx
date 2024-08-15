import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';

import {useStyles} from '../hooks/useStyles';

interface Navigation {
  navigation: {
    navigate: any;
  };
}
interface Route {
  route: string;
  params: any;
}
const HomeScreen = ({navigation}: Navigation, route) => {
  //
  const [newAlarmTime, setNewAlarmTime] = useState<any>(new Date());
  const [newAlarmRepeat, setNewAlarmRepeat] = useState<Array<string>>([]);
  const [newAlarmName, setNewAlarmName] = useState<string>('');
  const [isSnoozed, setIsSnoozed] = useState<boolean>(false);
  const [newAlarmSound, setNewAarmSound] = useState<string>('');
  //

  console.group('\x1b[46m');
  console.log('Home Screen');
  console.log('newAlarmTime:', newAlarmTime);
  console.log('newAlarmRepeat:', newAlarmRepeat);
  console.log('newAlarmName:', newAlarmName);
  console.log('newAlarmSound:', newAlarmSound);
  console.log('isSnoozed:', isSnoozed);
  console.groupEnd();

  //const [newAlarm, setNewAlarm] = useState({
  //  newAlarmTime: new Date(),
  //  newAlarmRepeat: [],
  //  newAlarmName: '',
  //  isSnoozed: false,
  //  newAlarmSound: '',
  //});

  //console.group('\x1b[46m');
  //console.log('Home Screen');
  //console.log('newAlarm', newAlarm);
  //console.groupEnd();

  const styles = useStyles();

  useEffect(() => {
    if (route.params?.newAlarm) {
      setNewAlarmTime(newAlarmTime);
      setNewAlarmName(newAlarmName);
      setNewAlarmRepeat(newAlarmRepeat);
      setIsSnoozed(isSnoozed);
    }
  }, [
    route.params?.newAlarm,
    newAlarmTime,
    newAlarmName,
    isSnoozed,
    newAlarmRepeat,
  ]);
  return (
    <>
      <View style={styles.homeScreenContainer}>
        <TouchableOpacity
          style={styles.homeScreenAddAlramButton}
          onPress={() => {
            navigation.navigate('Alarm Settings Screen', {
              onGoBack: (data: any) => {
                setNewAlarmTime(data.newAlarmTime);
                setNewAlarmName(data.newAlarmName);
                setNewAlarmRepeat(data.newAlarmRepeat);
                setIsSnoozed(data.isSnoozed);
              },
            });
          }}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
