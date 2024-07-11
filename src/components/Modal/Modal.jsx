import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from '../../hooks/useStyles';
const Modal = ({children}) => {
  const styles = useStyles();
  const [modal, showModal] = useState(false);

  return (
    <>
      {modal && (
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => !showModal()}>
            {children}
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.toggleModalButton} onPress={showModal} />
    </>
  );
};

export default Modal;
