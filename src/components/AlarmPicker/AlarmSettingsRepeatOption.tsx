import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsRepeatOption = ({weekday}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState([weekday]);
  //const [selected, setSelected] = useState({
  //  monday: 'Monday',
  //  tuesday: 'Tuesday',
  //  wednesday: 'Wednesday',
  //  thursday: 'Thursday',
  //  friday: 'Friday',
  //  saturday: 'Saturday',
  //  sunday: 'Sunday',
  //});

  const styles = useStyles();
  const selectedWeekdays = [];
  const handlePress = () => {
    setIsChecked((prevState) => !prevState);
    isChecked ? setSelected('') : setSelected(weekday);
    weekday === selected ? [weekday, ...selectedWeekdays] : selectedWeekdays;
  };

  console.log('weekday:', weekday);
  console.log('selected:', Array.isArray(selected));
  console.log('selectedWeekdays:', selectedWeekdays);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.alarmSettingsRepeatOption}>
        <Text style={styles.bottomSheetText}>Every {weekday}</Text>
        {isChecked ? <Text>✔️</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlarmSettingsRepeatOption;
