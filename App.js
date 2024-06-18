import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ScreenClock from './src/components/ScreenClock/ScreenClock';
import DigitalClock from './src/components/DigitalClock/DigitalClock';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialROuteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Digital Clock" component={DigitalClock} />
        <Stack.Screen name="Screen Clock" component={ScreenClock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
