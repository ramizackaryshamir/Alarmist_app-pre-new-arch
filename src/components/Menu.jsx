import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useStyles} from './hooks/useStyles';
//import DigitalClockSvg from '../assets/digital-clock-icon.svg';
const Menu = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.menuContainer}>
      <Pressable onPress={() => navigation.navigate('Screen Clock')}>
        <Text style={styles.bottomSheetText}>Screen Clock</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Digital Clock')}>
        <Text style={styles.bottomSheetText}>Digital Clock</Text>
        {/*<Image source={DigitalClockSvg} style={styles.menuLogoImage} />*/}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={styles.bottomSheetText}>Alarm Drawer</Text>
      </Pressable>
      <Text style={styles.bottomSheetText}>Settings</Text>
    </View>
  );
};

export default Menu;
