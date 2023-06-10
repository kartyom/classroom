import { Filters } from "@/components/filters";
import { TableRow } from "@/components/table-row";
import styles from "@/styles/Home.module.css";

export const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
] as const;

export type ClassTime = (typeof times)[number];
export type ClassDay = (typeof days)[number];

export interface Class {
  name: string;
  times: Time[];
  teacher: string;
  color: string;
}

interface Time {
  day: ClassDay;
  time: ClassTime;
}

const classes: Class[] = [
  {
    name: "CP-4",
    times: [
      {
        day: "MON",
        time: "11:00",
      },
    ],
    teacher: "Hayk Darbinyan",
    color: "red",
  },
  {
    name: "CP-8",
    times: [
      {
        day: "FRI",
        time: "11:00",
      },
    ],
    teacher: "Hayk Darbinyan",
    color: "blue",
  },
];

function isClassTime(cl: Class, time: ClassTime): boolean {
  return (
    cl.times.find((tm) => tm.time === time) !== undefined
  );
}

export default function Home() {
  return (
    <div>
      <Filters />
      <table>
        <thead>
          <tr>
            <td></td>
            {days.map((day) => (
              <td key={day}>{day}</td>
            ))}
          </tr>
        </thead>
        {times.map((time) => {
          const items = classes.filter((cl) => isClassTime(cl, time));
          return <TableRow key={time} time={time} items={items} />;
        })}
      </table>
    </div>
  );
}
