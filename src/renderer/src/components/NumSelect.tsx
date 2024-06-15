import getNextRangeNum from "@renderer/utils/getNextRangeNum";
import getPrevRangeNum from "@renderer/utils/getPrevRangeNum";
import toRangeNum from "@renderer/utils/toRangeNum";

import styles from "../assets/num-select.module.css";

interface Props {
   min: number;
   max: number;
   value: number;
   setValue: React.Dispatch<React.SetStateAction<number>>;
}

function NumSelect(props: Props): JSX.Element {
   const { min, max, value, setValue } = props;
   return <div className={styles["select-list"]}>
      <span className={styles["range-2"]}>{getPrevRangeNum(value, min, max, 2)}</span>
      <span className={styles["range-1"]}>{getPrevRangeNum(value, min, max, 1)}</span>
      <span className={styles["selected"]}>{toRangeNum(value)}</span>
      <span className={styles["range-1"]}>{getNextRangeNum(value, min, max, 1)}</span>
      <span className={styles["range-2"]}>{getNextRangeNum(value, min, max, 2)}</span>
   </div>
}

export default NumSelect;
