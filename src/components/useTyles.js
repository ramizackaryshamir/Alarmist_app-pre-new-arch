import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 35,
      backgroundColor: '#B2A137',
    },
  });

  return styles;
};
