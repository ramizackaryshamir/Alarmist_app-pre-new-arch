import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import Checkbox from '../../Inputs/Checkbox';
import {useStyles} from '../../../hooks/useStyles';

const AlarmSettingsRepeatOptionScreen = ({navigation, route}) => {
  const [selectedDays, setSelectedDays] = useState<[]>([]);
  console.log('selectedDays', selectedDays);
  const styles = useStyles();

  useEffect(() => {
    const handleGoBackToAlarmSettingsScreen = () => {
      route.params.onGoBack(selectedDays);
      navigation.goBack();
    };
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Back" onPress={handleGoBackToAlarmSettingsScreen} />
      ),
    });
  }, [navigation, route.params, selectedDays]);

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
    </View>
  );
};

export default AlarmSettingsRepeatOptionScreen;
