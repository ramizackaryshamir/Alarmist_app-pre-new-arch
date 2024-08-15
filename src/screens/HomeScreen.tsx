import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const HomeScreen = ({navigation, route}) => {
  const styles = useStyles();

  const [newAlarmTime, setNewAlarmTime] = useState<any>(new Date());
  const [newAlarmRepeat, setNewAlarmRepeat] = useState<Array<string>>([]);
  const [newAlarmName, setNewAlarmName] = useState<string>('');
  const [newAlarmSound, setNewAlarmSound] = useState<string>('');
  const [isSnoozed, setIsSnoozed] = useState<boolean>(false);

  console.group('\x1b[46m');
  console.log('Home Screen');
  console.log('newAlarmTime:', newAlarmTime);
  console.log('newAlarmRepeat:', newAlarmRepeat);
  console.log('newAlarmName:', newAlarmName);
  console.log('newAlarmSound:', newAlarmSound);
  console.log('isSnoozed:', isSnoozed);
  console.groupEnd();

  return (
    <>
      <View style={styles.homeScreenContainer}>
        {/*//*/}
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.homeScreenAddAlarmButton}
          onPress={() => {
            navigation.navigate('Alarm Settings Screen', {
              onGoBack: (data: any) => {
                setNewAlarmTime(data.alarmTime);
                setNewAlarmRepeat(data.alarmRepeat);
                setNewAlarmName(data.alarmName);
                setNewAlarmSound(data.alarmSound);
                setIsSnoozed(data.isSnoozed);
              },
            });
          }}
        />
        {/*//*/}
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
