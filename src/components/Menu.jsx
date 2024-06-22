import React, {
  useId,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
  useContext,
} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useStyles} from './useTyles';

const Menu = ({navigation}) => {
  const styles = useStyles();
  return (
    <>
      <View style={styles.menuContainer}>
        {/*/ Navigation in progress/*/}
        <Pressable onPress={() => navigation.navigate('Screen Clock')}>
          <Text>Screen Clock</Text>
        </Pressable>
        {/*/06-22-2024/*/}
        <Text>Digital Clock</Text>
        <Text>Alarm Drawer</Text>
        <Text>Settings</Text>
      </View>
    </>
  );
};

export default Menu;
