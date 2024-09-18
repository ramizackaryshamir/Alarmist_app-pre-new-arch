export interface AlarmProps {
  id: string;
  alarmWeekday: string;
  alarmDate: string;
  alarmTime: string;
  alarmRepeat: Array<string>;
  alarmName: string;
  alarmSound?: string;
  onToggle: () => void;
  alarmIsEnabled: boolean;
}
