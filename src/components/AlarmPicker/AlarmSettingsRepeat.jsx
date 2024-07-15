import React, {
  useState,
  //useRef
} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  //Switch,
} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsRepeat = () => {
  //NOTE 07.15.2024: Need to review useRef
  const [isVisible, setIsVisible] = useState(false);

  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const styles = useStyles();

  //const ref = useRef();
  //const handlePress = () => {
  //  const ref = ref.currewnt;
  //  ref.addEventListener('click', (e) => {
  //    e.stopPropagation();
  //    setIsVisible(!isVisible);
  //  });
  //};

  return (
    <View style={styles.alarmSettingsRepeatPageContainer}>
      <View style={styles.alarmSettingsRepeatOptionsContainer}>
        {weekdays.map((weekday, index) => {
          return (
            <TouchableWithoutFeedback
              key={`${weekday}${index}`}
              //ref={ref.current}
              onPress={() => setIsVisible((prevState) => !prevState)}
            >
              <View style={styles.alarmSettingsRepeatOption}>
                <Text style={styles.bottomSheetText}>Every {weekday}</Text>
                {isVisible && <Text>✔️</Text>}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

export default AlarmSettingsRepeat;
