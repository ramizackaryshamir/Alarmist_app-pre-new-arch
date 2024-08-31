import React from 'react';
import {View} from 'react-native';
import DigitalClock from '../components/DigitalClock';
import Modal from '../components/Modal/Modal';
import ColorOptionsMenu from '../components/Modal/ColorOptionsMenu/ColorOptionsMenu';
import Menu from '../components/Menu';
import {useStyles} from '../hooks/useStyles';

const DigitalClockScreen = ({navigation}: any) => {
  const styles = useStyles();

  return (
    <>
      <View style={styles.digitalClockScreenContainer}>
        <DigitalClock />
        <View style={styles.settingsContainer}>
          <Modal>
            <ColorOptionsMenu />
          </Modal>
        </View>
      </View>
      <Menu navigation={navigation} />
    </>
  );
};

export default DigitalClockScreen;