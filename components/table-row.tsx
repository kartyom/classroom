import { Class, ClassDay, ClassTime, days } from "@/pages";
import styles from "@/styles/Home.module.css";

interface TableRowProps {
  items: Class[];
  time: string;
  //classroom: string;
}

function isClassDay(cl: Class, day: ClassDay): boolean {
  return cl.times.find((tm) => tm.day === day) !== undefined;
}

export function TableRow(props: TableRowProps) {
  const { items, time } = props;

  return (
    <tr className="">
      <td>{time}</td>

      {days.map((day, index) => {
        const item = items.find((item) => isClassDay(item, day));
        if(!item) return <td></td>

        return (
        <td key={index} className={styles["row-" + item.color]}>
          <p>{item.name}</p>
          <p>{item.teacher}</p>
        </td>
      )})}
    </tr>
  );
}

