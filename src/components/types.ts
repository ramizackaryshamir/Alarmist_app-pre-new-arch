export interface AlarmProps {
  alarmWeekday: string;
  alarmDate: string;
  alarmTime: string;
  alarmName: string;
  alarmRepeat: Array<string>;
  isActive: boolean;
  toggleAlarm: any;
}
