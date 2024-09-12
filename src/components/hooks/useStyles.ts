import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    alarmContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'nowrap',
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 5,
      backgroundColor: 'pink',
    },
    alarmContainerLeft: {
      width: '50%',
    },
    alarmContainerLeftTop: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      columnGap: 5,
      paddingBottom: 3,
      paddingLeft: 10,
    },
    alarmTextLeftTop: {
      color: 'white',
      fontSize: 15,
    },
    alarmContainerLeftBottom: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      columnGap: 5,
    },
    alarmTextLeftBottom: {
      color: 'white',
      fontSize: 10,
    },
    alarmContainerRight: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: 5,
      width: '50%',
      backgroundColor: 'yellow',
    },
    alarmTextRight: {
      color: 'white',
      fontSize: 40,
      letterSpacing: 3,
      lineHeight: 50,
    },
    digitalClockContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width > 500 ? '35%' : '80%',
      height: height > 600 ? '20%' : '50%',
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    digitalClockRight: {
      flexDirection: 'row',
    },
    digitalClockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 80,
      color: 'white',
    },
    screenClockContainer: {
      flexDirection: width > 500 ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: '#F2D935',
    },
    screenClockText: {
      fontSize: 300,
      color: 'white',
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      position: 'relative',
      bottom: 0,
      paddingTop: 15,
      width: width,
      height: 55,
      backgroundColor: '#B2A137',
    },
  });
  return styles;
};
