import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useStyles} from '../../../hooks/useStyles';
import Checkbox from '../../Inputs/Checkbox';

const AlarmSettingsRepeatOptionScreen = ({navigation}) => {
  const [selectedDays, setSelectedDays] = useState<[]>([]);
  console.log('selectedDays', selectedDays);
  const styles = useStyles();
  return (
    <View style={styles.alarmSettingsRepeatOptionsPageContainer}>
      <Checkbox
        options={[
          {label: 'Every Monday', value: 'Monday'},
          {label: 'Every Tuesday', value: 'Tuesday'},
          {label: 'Every Wednesday', value: 'Wednesday'},
          {label: 'Every Thursday', value: 'Thursday'},
          {label: 'Every Friday', value: 'Friday'},
          {label: 'Every Saturday', value: 'Saturday'},
          {label: 'Every Sunday', value: 'Sunday'},
        ]}
        checkedValues={selectedDays}
        onChange={setSelectedDays}
      />
      <TouchableOpacity
        style={{width: 20, height: 20, backgroundColor: 'blue'}}
        onPress={() => {
          navigation.navigate({
            name: 'Alarm Bottom Sheet Modal',
            params: {
              selectedDays: selectedDays,
            },
          });
        }}
      />
    </View>
  );
};

export default AlarmSettingsRepeatOptionScreen;
