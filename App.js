import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.tsx';
import AlarmSettingsScreen from './src/components/AlarmPicker/screens/AlarmSettingsScreen';
import AlarmSettingsRepeatOptionScreen from './src/components/AlarmPicker/screens/AlarmSettingsRepeatOptionScreen';
import AlarmSettingsSoundOptionsScreen from './src/components/AlarmPicker/screens/AlarmSettingsSoundOptionsScreen';
import DigitalClockScreen from './src/screens/DigitalClockScreen';
import ScreenClockScreen from './src/screens/ScreenClockScreen';
import Menu from './src/components/Menu';
import {TouchableOpacity, Text, Button} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: '#00FFFF'},
            headerTintColor: '#00FFFF',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Alarm Settings Screen"
          component={AlarmSettingsScreen}
          options={(navigation, route) => ({
            headerStyle: {backgroundColor: 'red'},
            //headerTintColor: '#F2D935',
            headerBackTitle: 'Cancel',
            headerShown: true,
            headerRight: () => <Button title="Save" />,
          })}
        />
        <Stack.Screen
          name="Repeat"
          component={AlarmSettingsRepeatOptionScreen}
          options={(navigation, route) => ({
            headerStyle: {backgroundColor: 'green'},
            //headerTintColor: '#F2D935',
            headerShown: true,
            headerLeft: () => <Button title="Back" />,
          })}
        />
        <Stack.Screen
          name="Sound"
          component={AlarmSettingsSoundOptionsScreen}
          options={{
            headerStyle: {backgroundColor: '#F2D935'},
            //headerTintColor: '#F2D935',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Digital Clock"
          component={DigitalClockScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F2D935',
            },
            headerTintColor: '#F2D935',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Screen Clock"
          component={ScreenClockScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F2D935',
            },
            headerTintColor: '#F2D935',
            headerShown: false,
          }}
        />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
