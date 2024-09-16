import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    bottomSheetContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: 'red',
    },
    bottomSheetSettings: {
      width: width,
      borderWidth: 5,
      borderColor: 'green',
      borderRadius: 5,
    },
    bottomSheetRowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
    },
    bottomSheetButton: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      color: 'white',
      backgroundColor: 'orange',
    },
    bottomSheetInput: {
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
      color: 'white',
    },
    bottomSheetText: {
      color: 'white',
    },
    alarmSettingsRepeatOptionsPageContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      paddingTop: 20,
      backgroundColor: 'green',
    },
    alarmSettingsSoundPageContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      paddingTop: 20,
      backgroundColor: '#FF00FF',
    },
    alarmSettingsSoundFlatListContainer: {
      width: width - 20,
      marginTop: 50,
      borderColor: 'black',
      borderWidth: 5,
      borderRadius: 5,
      backgroundColor: 'white',
    },
  });
  return styles;
};
