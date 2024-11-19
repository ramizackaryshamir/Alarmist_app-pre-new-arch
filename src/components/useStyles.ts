import {useMemo} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {Colors} from '../lib/Colors';
import {generateRandomColors} from '../lib/utils';

export const useStyles = () => {
  const {width, height} = useWindowDimensions();

  let randomColor = generateRandomColors().toString();
  console.log(generateRandomColors());

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          width: '100%',
          position: 'relative',
        },
        alarmContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          borderBottomColor: '#dddddd',
          borderBottomWidth: 1,
          backgroundColor: randomColor,
        },
        deleteBackground: {
          flexDirection: 'row',
          justifyContent: 'flex-end', // Align buttons to the right
          alignItems: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: 'red',
          paddingHorizontal: 10, // Add spacing on the right side
        },
        buttonsContainer: {
          flexDirection: 'row', // Arrange buttons side by side
        },
        editButton: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
          height: '100%',
          margin: 0,
          borderRadius: 5,
          backgroundColor: 'orange',
        },

        editButtonText: {
          color: 'white',
          fontWeight: 'bold',
        },
        deleteButton: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: '100%',
          margin: 0,
          borderRadius: 5,
          backgroundColor: 'red',
        },
        deleteButtonText: {
          color: 'white',
          fontWeight: 'bold',
        },
        //deleteBackground: {
        //  ...StyleSheet.absoluteFillObject,
        //position: 'absolute',
        //left: 0,
        //right: 0,
        //top: 0,
        //bottom: 0,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'center',
        //},
        //editButton: {
        //  position: 'absolute',
        //  right: 60,
        //  justifyContent: 'center',
        //  alignItems: 'center',
        //  //width: 80,
        //  height: '100%',
        //  backgroundColor: 'orange',
        //  borderRadius: 5,
        //},
        //editButtonText: {
        //  color: 'white',
        //  fontWeight: 'bold',
        //},
        //deleteButton: {
        //  position: 'absolute',
        //  right: 0,
        //  justifyContent: 'center',
        //  alignItems: 'center',
        //  //width: 80,
        //  height: '100%',
        //  backgroundColor: 'red',
        //  borderRadius: 5,
        //},
        //deleteButtonText: {
        //  //paddingRight: 65,
        //  color: '#ffffff',
        //  fontWeight: 'bold',
        //},
        alarmContainerLeft: {
          width: '50%',
        },
        alarmContainerLeftTop: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          columnGap: 5,
          paddingBottom: 3,
          paddingLeft: 10,
        },
        alarmTextLeftTop: {
          color: 'white',
          fontSize: 15,
        },
        alarmContainerLeftBottom: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingLeft: 10,
          columnGap: 5,
        },
        alarmTextLeftBottom: {
          color: 'white',
          fontSize: 10,
        },
        alarmContainerRight: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 5,
          width: '50%',
          backgroundColor: randomColor,
        },
        alarmTextRight: {
          color: 'white',
          fontSize: 40,
          letterSpacing: 3,
          lineHeight: 50,
        },
        digitalClockContainer: {
          top: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width - 120,
          height: height - 140,
          borderWidth: 10,
          borderRadius: 15,
          backgroundColor: '#223240',
        },
        digitalClockRight: {
          flexDirection: 'row',
        },
        digitalClockText: {
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 200,
          color: Colors.vibrantPink,
        },
        screenClockContainer: {
          flexDirection: width > 500 ? 'row' : 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
          height: height,
          backgroundColor: Colors.vibrantPink,
        },
        screenClockText: {
          fontSize: 300,
          color: Colors.blackPurple1,
        },
        menuContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          position: 'relative',
          bottom: 0,
          paddingTop: 15,
          width: width,
          height: 55,
          backgroundColor: Colors.blackPurple3,
        },
        bottomSheetText: {
          fontVariant: ['small-caps', 'common-ligatures'],
          letterSpacing: 1,
          color: Colors.white,
          fontSize: width > 500 ? 20 : 10,
        },
      }),
    [width, height, randomColor],
  );
  return styles;
};
