import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

type Weekday = {
  weekday: string;
};

const AlarmSettingsRepeatOption = ({weekday}: Weekday) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>('');
  const [selectedWeekdays, setSelectedWeekdays] = useState<Array<string>>([]);
  const styles = useStyles();

  const handlePress = () => {
    //Job 1: toggle
    setIsChecked((prevState) => !prevState);
    //Job 2: set state for selectedWeekdays
    isChecked ? setSelected('') : setSelected(weekday);
  };

  console.log('weekday:', weekday);
  console.log('selected:', selected);
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
