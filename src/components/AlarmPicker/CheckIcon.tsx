import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

const CheckIcon = () => {
  const styles = useStyles();
  return <Text style={(styles.bottomSheetText, {fontSize: 30})}>✔️</Text>;
};
export default CheckIcon;
