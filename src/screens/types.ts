export interface NewAlarm {
  weekday: string;
  date: string;
  time: string;
  repeat: Array<string>;
  name: string;
  sound: string;
  isSnoozed: boolean;
  id: string;
  isActive?: boolean;
}
