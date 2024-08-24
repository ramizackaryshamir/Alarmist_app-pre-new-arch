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
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
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
        </Stack.Group>
        <Stack.Group
        //screenOptions={{presentation: 'modal'}}
        >
          <Stack.Screen
            name="Alarm Settings Screen"
            component={AlarmSettingsScreen}
            options={(navigation, route) => ({
              headerStyle: {backgroundColor: 'red'},
              headerBackTitle: 'Cancel',
              headerShown: true,
              headerRight: () => <Button title="Save" />,
              //headerTintColor: '#F2D935',
              //presentation: 'modal',
            })}
          />
          <Stack.Screen
            name="Repeat"
            component={AlarmSettingsRepeatOptionScreen}
            options={(navigation, route) => ({
              headerStyle: {backgroundColor: 'green'},
              headerShown: true,
              headerLeft: () => <Button title="Back" />,
              //headerTintColor: '#F2D935',
            })}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
