"use client";

import dynamic from "next/dynamic";
import { FC } from "react";
import { ICalendar } from "./calendar";

const Calendar = dynamic(() => import("./calendar"));

const CalendarLoader: FC<ICalendar> = (props) => {
  return <Calendar initialDate={props.initialDate} schedule={props.schedule} timeSlots={props.timeSlots} className={props.className} title={props.title}/>;
}

export default CalendarLoader;