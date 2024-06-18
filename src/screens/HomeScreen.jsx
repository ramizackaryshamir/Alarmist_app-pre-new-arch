import React from 'react';
import {View, Button} from 'react-native';
import ScreenClock from '../components/ScreenClock/ScreenClock';
import {useStyles} from './useStyles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <View>
        <View style={styles.homeScreenContainer}>
          <ScreenClock />
        </View>
        <View>
          <Button
            onPress={() => navigation.navigate('Digital Clock')}
            title="Go to Digital Clock"
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
