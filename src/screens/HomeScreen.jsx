import React from 'react';
import {View} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';
import AlarmPicker from '../components/AlarmPicker';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <View style={styles.homeScreenContainer} />
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
