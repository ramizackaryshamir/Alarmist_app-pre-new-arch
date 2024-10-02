import {StyleSheet, useWindowDimensions} from 'react-native';
import {Colors} from '../../lib/Colors';
import {generateRandomColors} from '../../lib/utils';
export const useStyles = () => {
  const {height, width} = useWindowDimensions();
  let randomColor = generateRandomColors().toString();
  console.log(generateRandomColors());
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
    },
    alarmContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'nowrap',
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 5,
      backgroundColor: randomColor,
    },
    deleteButton: {
      backgroundColor: 'red',
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
      backgroundColor: randomColor,
    },
    alarmTextRight: {
      color: 'white',
      fontSize: 40,
      letterSpacing: 3,
      lineHeight: 50,
    },
    digitalClockContainer: {
      top: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width - 120,
      height: height - 140,
      borderWidth: 10,
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    digitalClockRight: {
      flexDirection: 'row',
    },
    digitalClockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 200,
      color: Colors.vibrantPink,
    },
    screenClockContainer: {
      flexDirection: width > 500 ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: Colors.vibrantPink,
    },
    screenClockText: {
      fontSize: 300,
      color: Colors.blackPurple1,
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      position: 'relative',
      bottom: 0,
      paddingTop: 15,
      width: width,
      height: 55,
      backgroundColor: Colors.blackPurple3,
    },
    bottomSheetText: {
      fontVariant: ['small-caps', 'common-ligatures'],
      letterSpacing: 1,
      color: Colors.white,
      fontSize: width > 500 ? 20 : 10,
    },
  });
  return styles;
};
