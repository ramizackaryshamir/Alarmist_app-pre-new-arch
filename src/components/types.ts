export interface AlarmProps {
  id: string;
  alarmWeekday: string;
  alarmDate: string;
  alarmTime: string;
  alarmRepeat: Array<string>;
  alarmName: string;
  alarmSound?: string;
  onToggle: () => void;
  onDelete: () => void;
  alarmIsEnabled: boolean;
}

export interface SnoozeOptionsProps {
  option: {label: string; value: boolean};
  onToggle: any;
}

export type TimePickerProps = {
  newAlarmTime: any;
  onChange: any;
};
