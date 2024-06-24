import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DigitalClockScreen from './src/screens/DigitalClockScreen';
import ScreenClockScreen from './src/screens/ScreenClockScreen';
import Menu from './src/components/Menu';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Digital Clock" component={DigitalClockScreen} />
        <Stack.Screen name="Screen Clock" component={ScreenClockScreen} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
