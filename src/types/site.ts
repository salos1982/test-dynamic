
export interface Address {
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface TimePeriod {
  startTime: number;
  endTime: number;
}

export interface ScheduleItem {
  dayOfWeek: number;
  workingTime: TimePeriod;
}

export interface Schedule {
  workDays: ScheduleItem[];
}
