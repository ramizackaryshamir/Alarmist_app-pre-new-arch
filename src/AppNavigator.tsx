import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.tsx';
import AlarmSettingsScreen from './components/AlarmPicker/screens/AlarmSettingsScreen';
import AlarmSettingsRepeatOptionScreen from './components/AlarmPicker/screens/AlarmSettingsRepeatOptionScreen';
import AlarmSettingsSoundOptionsScreen from './components/AlarmPicker/screens/AlarmSettingsSoundOptionsScreen';
//import DigitalClockScreen from './screens/DigitalClockScreen';
//import ScreenClockScreen from './screens/ScreenClockScreen';
import ClockScreen from './screens/ClockScreen.tsx';
import Menu from './components/Menu';
import {Button} from 'react-native';
import {Colors} from './lib/Colors.ts';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {backgroundColor: Colors.blackPurple1},
              headerTintColor: Colors.white,
              headerShown: true,
              headerRight: () => <Button title="+" />,
            }}
          />
          <Stack.Screen
            name="Alarm Settings Screen"
            component={AlarmSettingsScreen}
            options={{
              headerStyle: {backgroundColor: Colors.blackPurple1},
              headerBackTitle: 'Cancel',
              headerTintColor: Colors.white,
              headerShown: true,
              headerRight: () => <Button title="Save" />,
              //headerTintColor: '#F2D935',
              //presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="Repeat"
            component={AlarmSettingsRepeatOptionScreen}
            options={{
              headerStyle: {backgroundColor: Colors.blackPurple1},
              headerTintColor: Colors.white,
              headerShown: true,
              headerLeft: () => <Button title="Back" />,
              //headerTintColor: '#F2D935',
            }}
          />
          <Stack.Screen
            name="Sound"
            component={AlarmSettingsSoundOptionsScreen}
            options={{
              headerStyle: {backgroundColor: '#F2D935'},
              headerShown: true,
              //headerTintColor: '#F2D935',
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Clock Screen"
            component={ClockScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.blackPurple1,
              },
              headerTintColor: Colors.white,
              headerShown: false,
            }}
          />
          {/*<Stack.Screen
            name="Digital Clock"
            component={DigitalClockScreen}
            options={{
              headerStyle: {
                backgroundColor: '#F2D935',
              },
              headerTintColor: '#F2D935',
              headerShown: false,
            }}
          />*/}
          {/*<Stack.Screen
            name="Screen Clock"
            component={ScreenClockScreen}
            options={{
              headerStyle: {
                backgroundColor: '#F2D935',
              },
              headerTintColor: '#F2D935',
              headerShown: false,
            }}
          />*/}
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
