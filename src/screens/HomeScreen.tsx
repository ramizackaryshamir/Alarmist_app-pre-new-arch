import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import DigitalCLock from '../components/DigitalClock';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.homeScreenContainer}>
          <DigitalCLock />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  homeScreenContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'yellow',
  },
});
export default HomeScreen;
