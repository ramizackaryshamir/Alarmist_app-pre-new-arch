import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text, Switch} from 'react-native';
import TimePicker from './TimePicker';
import {useStyles} from '../../hooks/useStyles';
const AlarmBottomSheetModal = ({navigation}) => {
  const [isEnabled, isetIsEnabled] = useState(false);
  const styles = useStyles();
  return (
    <View style={styles.bottomSheetContainer}>
      <TimePicker />
      <View style={styles.bottomSheetSettings}>
        <TouchableOpacity
          style={styles.bottomSheetButton}
          name="Repeat"
          onPress={() => {
            navigation.push('Repeat');
          }}
        >
          <Text style={styles.bottomSheetText}>Repeat</Text>
        </TouchableOpacity>
        <TextInput style={styles.bottomSheetInput} />
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.push('Sound');
          }}
        >
          <Text style={styles.bottomSheetText}>Sound</Text>
        </TouchableOpacity>
        <View style={styles.bottomSheetSwitchView}>
          <Text style={styles.bottomSheetText}>Snooze</Text>
          <Switch value={isEnabled} />
        </View>
      </View>
    </View>
  );
};

export default AlarmBottomSheetModal;
