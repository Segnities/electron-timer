import { useState } from "react";
import styles from "../assets/select-bar.module.css";
import NumSelect from "./NumSelect";

function SelectBar(): JSX.Element {
   const [seconds, setSeconds] = useState<number>(0);
   const [minutes, setMinutes] = useState<number>(0);
   const [hours, setHours] = useState<number>(0);

   return <div className={styles["select-bar"]}>
      <NumSelect min={0} max={24} value={hours} setValue={setHours} />
      <NumSelect min={0} max={60} value={minutes} setValue={setMinutes} />
      <NumSelect min={0} max={60} value={seconds} setValue={setSeconds} />
   </div>
}

export default SelectBar;