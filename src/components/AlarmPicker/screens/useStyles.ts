import {StyleSheet, useWindowDimensions} from 'react-native';
import {Colors} from '../../../lib/Colors';
export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    bottomSheetContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: Colors.blackPurple2,
    },
    bottomSheetSettings: {
      width: width,
      borderWidth: 1,
      //borderColor: Colors.blackPurple1,
      borderRadius: 5,
      backgroundColor: Colors.blackPurple3,
    },
    bottomSheetRowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
      borderBottomWidth: 1,
      color: Colors.white,
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
      color: Colors.white,
    },
    bottomSheetText: {
      fontVariant: ['small-caps', 'common-ligatures'],
      letterSpacing: 1,
      color: Colors.white,
    },
    alarmSettingsRepeatOptionsPageContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      paddingTop: 20,
      backgroundColor: Colors.blackPurple2,
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
