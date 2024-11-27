import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.tsx';
import AlarmSettingsScreen from './components/AlarmPicker/screens/AlarmSettingsScreen';
import AlarmSettingsRepeatOptionScreen from './components/AlarmPicker/screens/AlarmSettingsRepeatOptionScreen';
import AlarmSettingsSoundOptionsScreen from './components/AlarmPicker/screens/AlarmSettingsSoundOptionsScreen';
import ClockScreen from './screens/ClockScreen.tsx';
import Menu from './components/Menu';
import {Colors} from './lib/Colors.ts';
import {useDarkMode} from './hooks/useDarkMode.ts';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {theme} = useDarkMode();
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
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor:
                theme === 'dark' ? Colors.blackPurple1 : Colors.vibrantWhite,
            },
            headerTintColor:
              theme === 'dark' ? Colors.white : Colors.blackPurple1,
          }}
        >
          <Stack.Screen
            name="Alarm Settings Screen"
            component={AlarmSettingsScreen}
            options={{
              headerBackTitle: 'Cancel',
              headerRight: () => <Button title="Save" />,
            }}
          />
          <Stack.Screen
            name="Repeat"
            component={AlarmSettingsRepeatOptionScreen}
            options={{
              headerLeft: () => <Button title="Back" />,
            }}
          />
          <Stack.Screen
            name="Sound"
            component={AlarmSettingsSoundOptionsScreen}
            options={{}}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Clock Screen"
            component={ClockScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
