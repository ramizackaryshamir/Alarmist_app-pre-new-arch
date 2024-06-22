import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      //backgroundColor: 'green',
      backgroundColor: '#B2A137',
    },
    homeScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: '#F2D935',
    },
    digitalClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: '#F2D935',
    },
    digitalClockContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width > 500 ? '35%' : '80%',
      height: height > 600 ? '20%' : '40%',
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    digitalClockRight: {flexDirection: 'row'},
    digitalClockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 80,
      color: 'white',
    },
    screenClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: '#F2D935',
    },
    screenClockContainer: {
      justifyContent: 'space-around',
      width: width - 50,
      height: height - 50,
      backgroundColor: '#F2D935',
    },
    screenClockTop: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    screenClockBottom: {
      alignItems: 'center',
    },
    screenClockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 100,
      color: 'white',
    },
  });

  return styles;
};
