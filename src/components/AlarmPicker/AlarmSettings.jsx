import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlarmSettingsRepeat from './AlarmSettingsRepeat';
import AlarmBottomSheetModal from './AlarmBottomSheetModal';
const AlarmSettingsStack = createNativeStackNavigator();
const AlarmSettings = () => {
  return (
    <AlarmSettingsStack.Navigator>
      <AlarmSettingsStack.Screen
        name="Alarm Bottom Sheet Mopal"
        component={AlarmBottomSheetModal}
      />
      <AlarmSettingsStack.Screen
        name="Repeat"
        component={AlarmSettingsRepeat}
      />
    </AlarmSettingsStack.Navigator>
  );
};

export default AlarmSettings;
