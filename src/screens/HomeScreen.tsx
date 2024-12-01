import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, Alert} from 'react-native';
import Menu from '../components/Menu';
import Alarm from '../components/Alarm';
import {useStyles} from './useStyles.ts';
import {useCheckAlarm} from '../hooks/useCheckAlarm.ts';
import {NewAlarm} from '../types';
import {useConsoleColors} from '../hooks/useConsoleColors.ts';

const HomeScreen = ({navigation, route}: any) => {
  const {
    BgMagentaConsole,
    BgCyanConsole,
    BgWhiteConsole,
    BgGrayConsole,
    BgGreenConsole,
    BgYellowConsole,
    BgBlueConsole,
    BgRedConsole,
  } = useConsoleColors();
  const [alarms, setAlarms] = useState<Array<NewAlarm>>([]);
  const styles = useStyles();

  const {alarmIsEnabled, toggleEnable} = useCheckAlarm(alarms);

  // Handle adding a new alarm
  useEffect(() => {
    if (route.params?.newAlarmData) {
      setAlarms((current) => [
        ...current,
        formatAlarmData(route.params.newAlarmData),
      ]);
    }
  }, [route.params?.newAlarmData]);

  const formatAlarmData = (data: any) => ({
    weekday: data.newAlarmTime.slice(0, 3),
    date: data.newAlarmTime.slice(4, 15),
    time: data.newAlarmTime.slice(16, 21),
    repeat: data.newAlarmRepeat,
    name: data.newAlarmName || 'Alarm',
    sound: data.newAlarmSound,
    isSnoozed: data.isNewAlarmSnoozed,
    id: data.newAlarmId,
  });

  // Handle navigation to edit an alarm
  const handleEdit = useCallback(
    (id: string) => {
      const currentAlarm = alarms.find((alarm) => alarm.id === id);

      if (currentAlarm) {
        try {
          // Log the date and time for debugging
          console.log('Date:', currentAlarm.date);
          console.log('Time:', currentAlarm.time);

          // Parse date (e.g., "Wed Jan 1 2025") and time (e.g., "12:00 AM")
          const dateParts = currentAlarm.date.split(' '); // ["Wed", "Jan", "1", "2025"]
          const timeParts = currentAlarm.time.split(':'); // ["12", "00"]
          const hour = parseInt(timeParts[0], 10);
          const minute = parseInt(timeParts[1], 10);

          // Convert 12-hour to 24-hour format
          const isPM = currentAlarm.time.includes('PM');
          const adjustedHour =
            isPM && hour < 12 ? hour + 12 : hour === 12 && !isPM ? 0 : hour;

          // Construct the date object
          const alarmDateTime = new Date(
            `${dateParts[1]} ${dateParts[2]} ${dateParts[3]} ${adjustedHour}:${minute}:00`,
          );

          // Validate if the date is valid
          if (isNaN(alarmDateTime.getTime())) {
            throw new Error('Invalid Date Format');
          }

          // Navigate with serialized data
          navigation.navigate('Alarm Settings Screen', {
            alarmData: {
              newAlarmTime: alarmDateTime.toISOString(), // Pass ISO string
              newAlarmRepeat: currentAlarm.repeat,
              newAlarmName: currentAlarm.name,
              newAlarmSound: currentAlarm.sound,
              isNewAlarmSnoozed: currentAlarm.isSnoozed,
              newAlarmId: currentAlarm.id,
            },
          });
        } catch (error: any) {
          console.error('Error creating date:', error.message);

          // Use Alert.alert instead of alert
          Alert.alert(
            'Error',
            'Failed to edit the alarm due to an invalid date or time.',
          );
        }
      }
    },
    [alarms, navigation],
  );

  // Render alarms in the FlatList
  const renderItem = useCallback(
    ({item}: any) => (
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
        onDelete={() =>
          setAlarms((current) =>
            current.filter((alarm) => alarm.id !== item.id),
          )
        }
        onEdit={() => handleEdit(item.id)}
        alarmIsEnabled={alarmIsEnabled[item.id]}
      />
    ),
    [toggleEnable, alarmIsEnabled, handleEdit],
  );

  return (
    <>
      <View style={styles.homeScreenContainer}>
        <FlatList
          contentContainerStyle={styles.alarmsContainer}
          data={alarms}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
