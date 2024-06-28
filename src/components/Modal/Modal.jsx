import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import ColorOptionButton from './ColorOptionButton';
import {useStyles} from '../../hooks/useStyles';
const Modal = ({}) => {
  const styles = useStyles();
  const [modal, showModal] = useState(false);
  const [color, setColor] = useState({
    _E8E500: '#E8E500',
    _FF2281: '#FF2281',
    _75D5FD: '#75D5FD',
    _7122FA: '#7122FA',
    _09FBD3: '#09FBD3',
  });

  return (
    <>
      {modal && (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => !showModal()}>
            <View style={styles.modalOptionButtonsContainer}>
              <ColorOptionButton
                //onPress={() => console.log(setColor())}
                colorOption={color._E8E500}
              />
              <ColorOptionButton
                //onPress={() => console.log(setColor())}
                colorOption={color._FF2281}
              />
              <ColorOptionButton
                //onPress={() => console.log(setColor())}
                colorOption={color._75D5FD}
              />
              <ColorOptionButton
                //onPress={() => console.log(setColor())}
                colorOption={color._09FBD3}
              />
              <ColorOptionButton
                //onPress={() => console.log(setColor())}
                colorOption={color._7122FA}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.toggleModalButton} onPress={showModal} />
    </>
  );
};

export default Modal;
