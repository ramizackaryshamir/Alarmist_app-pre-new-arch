import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const styles = StyleSheet.create({
    homeScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: '#00FFFF',
    },
    homeScreenAddAlarmButton: {
      bottom: 300,
      width: 30,
      height: 30,
      backgroundColor: '#E4EBE6',
    },
    alarmsContainer: {
      justifyContent: 'center',
      rowGap: 5,
      width: width < 500 ? width - 30 : width - 180,
    },
    digitalClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: '#F2D935',
    },
    settingsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
    },
    screenClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: 'blue',
    },
  });
  return styles;
};
