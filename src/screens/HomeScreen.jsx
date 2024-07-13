import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const HomeScreen = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <View style={styles.homeScreenContainer}>
        <TouchableOpacity
          style={styles.homeScreenAddAlramButton}
          name="New Alarm"
          onPress={() => {
            navigation.navigate('Alarm Bottom Sheet Modal');
          }}
        />
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default HomeScreen;
