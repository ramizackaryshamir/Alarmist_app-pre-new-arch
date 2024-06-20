import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width, height, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: '#61E3FA',
    },
    screenContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
    },
    clockContainer: {
      justifyContent: 'space-around',
      width: width - 50,
      height: height - 50,
      backgroundColor: '#61E3FA',
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
