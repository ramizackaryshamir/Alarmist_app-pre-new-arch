import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width, height, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    screenContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
    },
    clockContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width > 500 ? '35%' : '73%',
      height: height > 600 ? '30%' : '50%',
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    clockRight: {flexDirection: 'row'},
    clockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 80,
      color: 'white',
    },
  });
  return styles;
};
