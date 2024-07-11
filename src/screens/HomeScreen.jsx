import React from 'react';
import {View} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';
import AlarmPicker from '../components/Modal/AlarmPicker';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <View style={styles.homeScreenContainer}>
        <AlarmPicker />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
