import dynamic from "next/dynamic";
import { Schedule } from "../types/site";
import H1 from "./h1/h1"
import Text from "./text/text";

//import Calendar from "./calendar/calendar-loader";
const Calendar = dynamic(() => import("./calendar/calendar"));


export function componentFactory(blockname: string, index: number) {
  switch (blockname) {
    case "h1": 
      return <H1 title="Header" key={index}/>
    case "text":
      return <Text text={"text"} key={index} />
    case "calendar": {
      const schedule: Schedule = {
        workDays: [
          {
            dayOfWeek: 1,
            workingTime: {
              startTime: 32400,
              endTime: 64800
            }
            
          },
          {
            dayOfWeek: 2,
            workingTime: {
              startTime: 32400,
              endTime: 64800
            }
          },
          {
            dayOfWeek: 3,
            workingTime: {
              startTime: 32400,
              endTime: 64800
            }
          },
          {
            dayOfWeek: 4,
            workingTime: {
              startTime: 32400,
              endTime: 64800
            }
          },
          {
            dayOfWeek: 5,
            workingTime: {
              startTime: 32400,
              endTime: 64800
            }
          }
        ]
      }

      const timeSlots = [
        { value: "1", text: "1"},
        { value: "2", text: "2"},
      ] 
      return <Calendar initialDate={new Date()} schedule={schedule} timeSlots={timeSlots} key={index}/>;
    }
  }

  return null;
}
