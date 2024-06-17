import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
  //Text,
} from 'react-native';
import DigitalCLock from '../components/DigitalClock';

const useStyles = () => {
  const dimensions = useWindowDimensions();

  const styles = StyleSheet.create({
    safeAreaView: {
      backgroundColor: '#61E3FA',
    },
    homeScreenContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: dimensions.height,
      width: dimensions.width,
      backgroundColor: '#61E3FA',
    },
  });
  return styles;
};

const HomeScreen = () => {
  //const {height, width} = useWindowDimensions();
  const styles = useStyles();
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.homeScreenContainer}>
          <DigitalCLock />
          {/*<Text>{height}</Text>
        <Text>{width}</Text>*/}
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
