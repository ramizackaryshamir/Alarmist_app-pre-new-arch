import React from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import {useStyles} from './useStyles';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.homeScreenContainer}>
          <Button
            onPress={() => navigation.navigate('Screen Clock')}
            title="Go to Screen Clock"
          />
          <Button
            onPress={() => navigation.navigate('Digital Clock')}
            title="Go to Digital Clock"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
