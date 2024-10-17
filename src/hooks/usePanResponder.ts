import {useState, useRef} from 'react';
import {useWindowDimensions, PanResponder, Animated} from 'react-native';

export const usePanResponder = () => {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const {width} = useWindowDimensions();
  const SWIPE_THRESHOLD = width / 3;
  console.log(width / 3);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx < 0) {
          pan.setValue({x: gesture.dx, y: gesture.dy});
        }
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx < -SWIPE_THRESHOLD) {
          setIsShowDelete(true);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return {isShowDelete, pan, panResponder};
};
