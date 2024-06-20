import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DigitalClockScreen from './src/screens/DigitalClockScreen';
import ScreenClockScreen from './src/screens/ScreenClockScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialROuteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Digital Clock" component={DigitalClockScreen} />
        <Stack.Screen name="Screen Clock" component={ScreenClockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
