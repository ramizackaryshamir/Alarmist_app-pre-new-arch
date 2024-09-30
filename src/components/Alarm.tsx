import React from 'react';
import {View, Text, Switch, TouchableOpacity, Animated} from 'react-native';
import {useStyles} from './hooks/useStyles';
import {usePanResponder} from './hooks/usePanResponder';
import {AlarmProps} from './types';

const Alarm = ({
  alarmWeekday,
  alarmDate,
  alarmTime,
  alarmRepeat,
  alarmName,
  onToggle,
  onDelete,
  alarmIsEnabled,
}: AlarmProps) => {
  //This component DISPLAYS how the alarm will render to the UI. Sound and isSNoozed props aren't needed 08/29/2024
  const styles = useStyles();
  const {isShowDelete, pan, panResponder} = usePanResponder();
  return (
    <View style={styles.container}>
      {isShowDelete && (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <Animated.View {...panResponder.panHandlers} style={[pan.getLayout()]}>
          <View style={styles.alarmContainer}>
            <View style={styles.alarmContainerLeft}>
              <View style={styles.alarmContainerLeftTop}>
                <Text style={styles.alarmTextLeftTop}>{alarmWeekday}</Text>
                <Text style={styles.alarmTextLeftTop}>{alarmDate}</Text>
              </View>
              <View style={styles.alarmContainerLeftBottom}>
                <Text style={styles.alarmTextLeftBottom}>{alarmName}</Text>
                <Text style={styles.alarmTextLeftBottom}>{alarmRepeat}</Text>
              </View>
            </View>
            <View style={styles.alarmContainerRight}>
              <Text style={styles.alarmTextRight}>{alarmTime}</Text>
              <Switch onValueChange={onToggle} value={alarmIsEnabled} />
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Alarm;
