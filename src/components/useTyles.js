import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#B2A137',
    },
  });

  return styles;
};
