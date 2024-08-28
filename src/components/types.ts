export interface AlarmProps {
  alarmWeekday: string;
  alarmDate: string;
  alarmTime: string;
  alarmRepeat: Array<string>;
  alarmName: string;
  alarmSound: string;
  alarmIsActive: boolean;
  onToggleAlarm: any;
}
