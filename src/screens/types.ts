export interface NewAlarm {
  time: string;
  repeat: Array<string>;
  name: string;
  sound: Array<string>;
  isSnoozed: boolean;
}
