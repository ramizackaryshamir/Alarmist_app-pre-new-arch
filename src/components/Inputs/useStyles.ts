import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width} = useWindowDimensions();

  const styles = StyleSheet.create({
    alarmSettingsRepeatOptionsContainer: {
      width: width - 30,
      marginTop: 50,
      borderColor: 'black',
      borderWidth: 5,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    alarmSettingsRepeatOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 40,
      paddingRight: 10,
      paddingLeft: 10,
      marginBottom: 5,
      backgroundColor: 'green',
    },
    checkboxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    checkIcon: {
      color: 'black',
      fontSize: 20,
    },
    activeCheckIcon: {
      color: 'transparent',
      fontSize: 20,
    },
  });
  return styles;
};
