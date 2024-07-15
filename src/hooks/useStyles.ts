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
      backgroundColor: '#F2D935',
    },
    homeScreenAddAlramButton: {
      bottom: 300,
      left: 130,
      width: 30,
      height: 30,
      backgroundColor: 'red',
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
    settingsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: width > 500 ? '30%' : '60%',
      left: -100,
      width: 300,
      height: 70,
      zIndex: 100,
      borderRadius: 20,
      backgroundColor: 'rgba(28, 18, 255, 1)',
    },
    modalOptionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginRight: 10,
      marginLeft: 10,
    },
    toggleModalButton: {
      position: 'relative',
      top: 20,
      width: 20,
      height: 20,
      backgroundColor: 'green',
    },
    bottomSheetContainer: {
      width: width,
      height: height,
      backgroundColor: 'red',
    },
    bottomSheetSettings: {
      borderWidth: 5,
      borderColor: 'green',
      borderRadius: 5,
    },
    bottomSheetButton: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 40,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      color: 'white',
      backgroundColor: 'orange',
    },
    bottomSheetInput: {
      height: 40,
      paddingLeft: 5,
      paddingRight: 5,
      color: 'white',
    },
    bottomSheetSwitchView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 5,
      paddingRight: 5,
    },
    bottomSheetText: {
      color: 'white',
    },
    alarmPickerButton: {
      position: 'relative',
      bottom: 320,
      left: 120,
      width: 20,
      height: 20,
      backgroundColor: 'red',
    },
  });
  return styles;
};
