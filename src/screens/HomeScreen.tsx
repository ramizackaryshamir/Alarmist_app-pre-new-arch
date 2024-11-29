import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
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

  // Handle navigation to edit an alarm
  const handleEdit = useCallback(
    (id: string) => {
      const currentAlarm = alarms.find((alarm) => alarm.id === id);
      BgMagentaConsole(currentAlarm);
      BgCyanConsole(
        `${currentAlarm.weekday} ${currentAlarm.date} ${currentAlarm.time}`,
      );
      // Navigate to Alarm Settings Screen with the current alarm data
      navigation.navigate('Alarm Settings Screen', {
        alarmData: currentAlarm,
        onGoBack: (updatedAlarm: NewAlarm | null) => {
          if (updatedAlarm) {
            // Update the alarm if changes are saved
            setAlarms((currentAlarms) =>
              currentAlarms.map((alarm) =>
                alarm.id === updatedAlarm.id ? updatedAlarm : alarm,
              ),
            );
          } else {
            // Remove the alarm if it was deleted
            setAlarms((currentAlarms) =>
              currentAlarms.filter((alarm) => alarm.id !== id),
            );
          }
        },
      });
    },
    [alarms, navigation],
  );

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
