import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const AlarmSettingsSoundOption = ({ringtone}) => {
  const [isVisible, setIsVisible] = useState(false);
  const styles = useStyles();

  const handlePress = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.alarmSettingsRepeatOption}>
        <Text style={styles.bottomSheetText}>Every {ringtone}</Text>
        {isVisible ? <Text>✔️</Text> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlarmSettingsSoundOption;
