export interface NewAlarm {
  weekday: string;
  date: string;
  time: string;
  repeat: Array<string>;
  name: string;
  sound: Array<string>;
  isSnoozed: boolean;
  //isActive: boolean;
}
