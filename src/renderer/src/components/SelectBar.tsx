import { useState } from "react";
import styles from "../assets/select-bar.module.css";
import NumSelect from "./NumSelect";

function SelectBar(): JSX.Element {
   const [seconds, setSeconds] = useState<number>(0);
   const [minutes, setMinutes] = useState<number>(0);
   const [hours, setHours] = useState<number>(0);

   return <div className={styles["select-bar"]}>
      <NumSelect name="hours" min={0} max={23} value={hours} setValue={setHours} />
      <NumSelect name="minutes" min={0} max={59} value={minutes} setValue={setMinutes} />
      <NumSelect name="seconds" min={0} max={59} value={seconds} setValue={setSeconds} />
   </div>
}

export default SelectBar;