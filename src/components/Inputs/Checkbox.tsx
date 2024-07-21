import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStyles} from '../../hooks/useStyles';
const Checkbox = ({options, checkedValues, onChange}) => {
  const styles = useStyles();
  let updatedCheckedValues = [...checkedValues];
  console.log('checkedValues', checkedValues);
  return (
    <>
      <View style={styles.alarmSettingsRepeatOptionsContainer}>
        {options.map((option) => {
          let isChecked = updatedCheckedValues.includes(option.value);
          return (
            <View style={styles.alarmSettingsRepeatOption}>
              <TouchableOpacity
                key={option.value}
                style={
                  isChecked
                    ? [styles.checkboxContainer, styles.activeCheckbox]
                    : styles.checkboxContainer
                }
                onPress={() => {
                  if (isChecked) {
                    updatedCheckedValues = updatedCheckedValues.filter(
                      (checkedValue) => checkedValue !== option.value,
                    );
                    return onChange(updatedCheckedValues);
                  }
                  updatedCheckedValues.push(option.value);
                  onChange = {updatedCheckedValues};
                }}
              >
                <Text>{option.label}</Text>
                {isChecked ? (
                  <Text style={(styles.bottomSheetText, {fontSize: 30})}>
                    ✔️
                  </Text>
                ) : null}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
};
export default Checkbox;
