import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    safeAreaView: {
      backgroundColor: '#61E3FA',
    },
    homeScreenContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: '#61E3FA',
    },
  });
  return styles;
};
