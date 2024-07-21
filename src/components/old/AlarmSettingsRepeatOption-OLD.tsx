import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

type Weekday = {
  weekday: string;
};

type SelectedWeekdays = [
  {
    selectedWeekday: string;
    checked: boolean;
  },
  {selectedWeekday: string; checked: boolean},
  {
    selectedWeekday: string;
    checked: boolean;
  },
  {selectedWeekday: string; checked: boolean},
  {
    selectedWeekday: string;
    checked: boolean;
  },
  {selectedWeekday: string; checked: boolean},
  {
    selectedWeekday: string;
    checked: boolean;
  },
];
const AlarmSettingsRepeatOption = ({weekday}: Weekday) => {
  const styles = useStyles();

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [selectedWeekdays, setSelectedWeekdays] = useState<SelectedWeekdays>([
    {
      selectedWeekday: 'Monday',
      checked: false,
    },
    {selectedWeekday: 'Tuesday', checked: false},
    {
      selectedWeekday: 'Wednesday',
      checked: false,
    },
    {selectedWeekday: 'Thursday', checked: false},
    {
      selectedWeekday: 'Firday',
      checked: false,
    },
    {selectedWeekday: 'Saturday', checked: false},
    {
      selectedWeekday: 'Sunday',
      checked: false,
    },
  ]);

  const handlePress = () => {
    //Job 1: toggle
    setIsChecked((prevState) => !prevState);
    //Job 2: set state for selectedWeekday

    selectedWeekdays.filter((selected) => weekday === selected.selectedWeekday);

    selectedWeekdays.map((selected) => {
      console.log(
        '\x1b[43m',
        'selected.selectedWeekday',
        selected.selectedWeekday,
      );
      console.log('\x1b[43m', 'weekday', weekday);
    });

    selectedWeekdays.filter((selected) => {
      console.log(
        '\x1b[44m',
        'weekday === selected.selectedWeekday',
        weekday === selected.selectedWeekday,
      );
    });

    //isChecked
    //  ? setSelectedWeekday({weekday: ''})
    //  : setSelectedWeekday({weekday: weekday});
    console.log(
      '\x1b[41m',

      'isChecked inside of handler:',
      isChecked,
    );
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

      'Array.isArray() selectedWeekdays inside of handler:',
      Array.isArray(selectedWeekdays),
    );
    console.log(
      '\x1b[41m',

      'selectedWeekdays inside of handler:',
      selectedWeekdays,
    );
  };
  console.log('\x1b[42m', 'isChecked outside of handler:', isChecked);
  console.log('\x1b[42m', 'typeof weekday outside of handler:', typeof weekday);
  console.log('\x1b[42m', 'weekday outside of handler:', weekday);
  console.log(
    '\x1b[42m',

    'Array.isArray() selectedWeekdays outside of handler:',
    Array.isArray(selectedWeekdays),
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
