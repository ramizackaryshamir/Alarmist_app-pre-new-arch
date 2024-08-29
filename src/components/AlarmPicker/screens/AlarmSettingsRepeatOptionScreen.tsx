import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import Checkbox from '../../Inputs/Checkbox';
import {useStyles} from '../../../hooks/useStyles';

const AlarmSettingsRepeatOptionScreen = ({navigation, route}: any) => {
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
          {label: 'Every Monday', value: 'Mon '},
          {label: 'Every Tuesday', value: 'Tue '},
          {label: 'Every Wednesday', value: 'Wed '},
          {label: 'Every Thursday', value: 'Thu '},
          {label: 'Every Friday', value: 'Fri '},
          {label: 'Every Saturday', value: 'Sat '},
          {label: 'Every Sunday', value: 'Sun '},
        ]}
        checkedValues={selectedDays}
        onChange={setSelectedDays}
      />
    </View>
  );
};

export default AlarmSettingsRepeatOptionScreen;
