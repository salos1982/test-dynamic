import { Schedule } from "../types/site";

export function getClosedDays(schedule: Schedule) {
  const closedDays: Array<number> = [];
  schedule?.workDays?.forEach((item: any) => {
    item.workingTime === undefined && closedDays.push(item.dayOfWeek);
  });
  return closedDays;
}

function getNextDayDate(x: number) {
  var now = new Date();
  now.setDate(now.getDate() + ((x + (7 - now.getDay())) % 7));
  return now;
}

export function getNextWorkingDay(schedule: Schedule) {
  let today = new Date();
  const closedDays = getClosedDays(schedule);
  const daysArray = [0, 1, 2, 3, 4, 5, 6];

  if (closedDays.includes(today.getDay())) {
    for (let i = 1; i <= daysArray.length; i++) {
      if (daysArray.indexOf(today.getDay() + i) !== -1 && !closedDays.includes(daysArray.indexOf(today.getDay() + i))) {
        return getNextDayDate(daysArray[daysArray.indexOf(today.getDay() + i)]);
      } else if (daysArray.indexOf(today.getDay() + i) == -1) {
        const filteredArray = daysArray.filter((item) => !closedDays.includes(item));
        return getNextDayDate(filteredArray[0]);
      }
    }
  } else {
    return today;
  }
}

export function isWeekdayForSchedule(date: Date, schedule: Schedule): boolean {
  const day = date.getDay();
  return !getClosedDays(schedule).includes(day);
}
