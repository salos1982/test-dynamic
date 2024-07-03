"use client";

import { FC, useState } from "react";
import cx from "classnames";
//import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./day-picker.css";

import styles from "./calendar.module.scss";
import { Schedule } from "../../types/site";
import { isWeekdayForSchedule } from "../../utils/scheduleUtils";

interface ICalendar {
  className?: string;
  title?: string;
  initialDate: Date;
  schedule: Schedule;
  timeSlots: {
    value: string;
    text: string;
  }[];
  activeSlot?: string;
  minDate?: Date;
}

const Calendar: FC<ICalendar> = ({
  className,
  initialDate,
  schedule,
  timeSlots,
  activeSlot,
  minDate,
}) => {
  const [selectedDay, setSelectedDay] = useState(initialDate)
  const t = (s: string) => s; //useTranslations("common");

  const handleDayClickHandler = (day: Date) => {
    setSelectedDay(day);
  };

  const isWeekday = (date: Date) => isWeekdayForSchedule(date, schedule);

  return (
    <div className={cx(styles.container, className)}>
      <div className={cx(styles.calendar, "calendarSmall")}>
        <DatePicker
          showPopperArrow={false}
          selected={selectedDay}
          onChange={handleDayClickHandler}
          filterDate={isWeekday}
          minDate={minDate ?? new Date()}
          inline
        />
      </div>
      <div className={styles.slots}>
        <h4 className={styles.slotsTitle}>{t("preferred_time")}</h4>
        <div className={styles.slotsContainer}>
          {timeSlots.map((item, index) => (
            <div
              key={index}
              className={cx(styles.slot, {
                [styles.active]: activeSlot === item.value,
              })}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
