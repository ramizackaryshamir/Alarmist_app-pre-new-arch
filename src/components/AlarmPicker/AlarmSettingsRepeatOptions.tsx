import React, {useState} from 'react';
import Checkbox from '../Inputs/Checkbox';

const AlarmSettingsRepeatOptions = () => {
  //state to monitor the values that have been checked
  const [selectedDays, setSelectedDays] = useState<[]>([]);
  console.log('selectedDays', selectedDays);
  return (
    <>
      <Checkbox
        options={[
          {label: 'Every Monday', value: 'Monday'},
          {label: 'Every Tuesday', value: 'Tuesday'},
          {label: 'Every Wednesday', value: 'Wednesday'},
          {label: 'Every Thursday', value: 'Thursday'},
          {label: 'Every Friday', value: 'Friday'},
          {label: 'Every Saturday', value: 'Saturday'},
          {label: 'Every Sunday', value: 'Sunday'},
        ]}
        checkedValues={selectedDays}
        onChange={setSelectedDays}
      />
    </>
  );
};
export default AlarmSettingsRepeatOptions;
