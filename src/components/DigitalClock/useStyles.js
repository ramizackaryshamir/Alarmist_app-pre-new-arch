import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {width, height, fontScale} = useWindowDimensions();
  const styles = StyleSheet.create({
    clockContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height * 0.5,
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
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
