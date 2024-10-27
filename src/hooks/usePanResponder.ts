import {useState, useRef} from 'react';
import {useWindowDimensions, PanResponder, Animated} from 'react-native';

export const usePanResponder = () => {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const {width} = useWindowDimensions();
  const SWIPE_THRESHOLD = width / 3;
  const pan = useRef(new Animated.ValueXY()).current;

  // Reset swipe position smoothly
  const resetPosition = () => {
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
    setIsShowDelete(false);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx < 0) {
          pan.setValue({x: gesture.dx, y: 0});
        }
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx < -SWIPE_THRESHOLD) {
          setIsShowDelete(true); // Show delete button if swipe exceeds threshold
        } else {
          resetPosition(); // Reset position if threshold not met
        }
      },
    }),
  ).current;

  return {isShowDelete, pan, panResponder, resetPosition};
};
