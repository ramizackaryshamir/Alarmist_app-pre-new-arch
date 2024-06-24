import {useState, useEffect} from 'react';
import {showLocalTime} from '../lib/utils';
export const useTime = () => {
  const [localTime, setLocalTime] = useState({
    hour: '',
    minute: '',
    second: '',
  });
  useEffect(() => {
    const {hour, minute, second} = showLocalTime();

    const time = setTimeout(() => {
      setLocalTime({
        hour: hour,
        minute: minute,
        second: second,
      });
    }, 1000);
    //console.log(localTime.hour, localTime.minute, localTime.second);
    return () => clearTimeout(time);
  }, [localTime.hour, localTime.minute, localTime.second]);

  console.log(localTime.hour, localTime.minute, localTime.second);
  console.log(localTime);
  return localTime;
};
