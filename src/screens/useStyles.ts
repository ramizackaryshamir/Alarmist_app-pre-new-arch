import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    homeScreenContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: height - 200,
      width: width - 100,
      backgroundColor: '#61E3FA',
    },
  });
  return styles;
};
