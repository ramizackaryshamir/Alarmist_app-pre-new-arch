import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DigitalClockScreen from './src/screens/DigitalClockScreen';
import ScreenClockScreen from './src/screens/ScreenClockScreen';
import Menu from './src/components/Menu';
import ErrorBoundary from './src/components/ErrorBoundary';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {backgroundColor: '#F2D935'},
            headerTintColor: '#F2D935',
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
          }}
        />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
