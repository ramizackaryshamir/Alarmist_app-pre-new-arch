import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

type Weekday = {
  weekday: string;
};

const AlarmSettingsRepeatOption = ({weekday}: Weekday) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedWeekday, setSelectedWeekday] = useState<Weekday>({
    weekday: '',
  });
  const [selectedWeekdays, setSelectedWeekdays] = useState<Array<Weekday>>([]);

  const styles = useStyles();

  const handlePress = () => {
    //Job 1: toggle
    setIsChecked((prevState) => !prevState);
    //Job 2: set state for selectedWeekday
    isChecked
      ? setSelectedWeekday({weekday: ''})
      : setSelectedWeekday({weekday: weekday});
    console.log(
      '\x1b[41m',

      'typeof weekday inside of handler:',
      typeof weekday,
    );
    console.log(
      '\x1b[41m',

      'weekday inside of handler:',
      weekday,
    );
    console.log(
      '\x1b[41m',

      'isChecked inside of handler:',
      isChecked,
    );
    console.log(
      '\x1b[41m',

      'selectedWeekday inside of handler:',
      selectedWeekday,
    );
    console.log(
      '\x1b[41m',

      'selectedWeekdays inside of handler:',
      selectedWeekdays,
    );
  };

  console.log('\x1b[42m', 'typeof weekday outside of handler:', typeof weekday);
  console.log('\x1b[42m', 'weekday outside of handler:', weekday);
  console.log('\x1b[42m', 'isChecked outside of handler:', isChecked);
  console.log(
    '\x1b[42m',
    'selectedWeekday outside of handler:',
    selectedWeekday,
  );
  console.log(
    '\x1b[42m',
    'selectedWeekdays outside of handler:',
    selectedWeekdays,
  );

  //TODO set up function to handle state for adding and removing selectedWeekday variables from selectedWeekdays array. SelectedWeekdays array will be the data that is passed back to parent AlarmBootomSheetModal screen 07172024

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.alarmSettingsRepeatOption}>
        <Text style={styles.bottomSheetText}>Every {weekday}</Text>
        {isChecked ? (
          <Text style={(styles.bottomSheetText, {fontSize: 30})}>✔️</Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlarmSettingsRepeatOption;
