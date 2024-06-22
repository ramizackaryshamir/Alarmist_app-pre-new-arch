import React from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

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
        <Menu />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
