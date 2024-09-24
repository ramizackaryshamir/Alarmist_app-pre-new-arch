import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Animated,
  PanResponder,
  useWindowDimensions,
} from 'react-native';
import {useStyles} from './hooks/useStyles';
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
  const {width} = useWindowDimensions();
  const SWIPE_THRESHOLD = width / 3;
  console.log(width / 3);
  const pan = useRef(new Animated.ValueXY()).current;
  const [isShowDelete, setIsShowDelete] = useState(false);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx < 0) {
          pan.setValue({x: gesture.dx, y: gesture.dy});
        }
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx < -SWIPE_THRESHOLD) {
          setIsShowDelete(true);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <>
      {isShowDelete && (
        <TouchableOpacity onPress={onDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>
      )}
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
    </>
  );
};

export default Alarm;
