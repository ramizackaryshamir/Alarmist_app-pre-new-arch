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
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: 'red',
          flexDirection: 'row', // Arrange buttons side by side
          alignItems: 'center', // Vertically center buttons
          padding: 0,
        },

        buttonsContainer: {
          position: 'absolute', // Ensure absolute positioning within the red background
          right: 0, // Align the buttonsContainer to the right
          top: 0,
          bottom: 0, // Span the full height of the container
          width: 160, // Set explicit width for two buttons (adjust as needed)
          flexDirection: 'row',
          justifyContent: 'space-between', // Ensure buttons abut each other
          alignItems: 'stretch', // Make buttons span full height
        },

        editButton: {
          flex: 1, // Ensure both buttons take equal width
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
          margin: 0, // Remove any unnecessary spacing
          height: '100%', // Ensure button spans full height
        },

        editButtonText: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },

        deleteButton: {
          flex: 1, // Ensure both buttons take equal width
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          margin: 0, // Remove any unnecessary spacing
          height: '100%', // Ensure button spans full height
        },

        deleteButtonText: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
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
