import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width, height, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: '#61E3FA',
    },
    clockContainer: {
      justifyContent: 'space-around',
      width: width - 50,
      height: height,
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    clockTop: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    clockBottom: {
      alignItems: 'center',
    },
    clockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 100,
      color: 'white',
    },
  });
  return styles;
};
