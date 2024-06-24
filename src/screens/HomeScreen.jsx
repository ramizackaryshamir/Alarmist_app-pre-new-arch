import React from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.homeScreenContainer} />
        <Menu navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
