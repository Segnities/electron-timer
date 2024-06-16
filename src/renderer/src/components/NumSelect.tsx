import getNextRangeNum from "@renderer/utils/getNextRangeNum";
import getPrevRangeNum from "@renderer/utils/getPrevRangeNum";
import toRangeNum from "@renderer/utils/toRangeNum";

import styles from "../assets/num-select.module.css";
import React, { useEffect, useState } from "react";

interface Props {
   min: number;
   max: number;
   value: number;
   setValue: React.Dispatch<React.SetStateAction<number>>;
}

function NumSelect(props: Props): JSX.Element {
   const { min, max, value, setValue } = props;

   const [positive1Range, setPositive1Range] = useState<string>(getNextRangeNum(value, min, max, 1));
   const [positive2Range, setPositive2Range] = useState<string>(getNextRangeNum(value, min, max, 2));

   const [negative1Range, setNegative1Range] = useState<string>(getPrevRangeNum(value, min, max, 1));
   const [negative2Range, setNegative2Range] = useState<string>(getPrevRangeNum(value, min, max, 2));


   const handleMouseWheel = (event: React.WheelEvent):void => {
      event.preventDefault();
      if (event.deltaY < 0) {
         setValue(prevValue => parseInt(getPrevRangeNum(prevValue, min, max, 1)));
      } else {
         setValue(prevValue => parseInt(getNextRangeNum(prevValue, min, max, 1)));
      }
   }

   useEffect(() => {
      setNegative1Range(getPrevRangeNum(value, min, max, 1));
      setNegative2Range(getPrevRangeNum(value, min, max, 2));
      setPositive1Range(getNextRangeNum(value, min, max, 1));
      setPositive2Range(getNextRangeNum(value, min, max, 2));
   }, [value])


   return (
      <div
         className={styles["select-list"]}
         onWheel={handleMouseWheel}
      >
         <span className={styles["range-2"]}>{negative2Range}</span>
         <span className={styles["range-1"]}>{negative1Range}</span>
         <span className={styles["selected"]}>{toRangeNum(value)}</span>
         <span className={styles["range-1"]}>{positive1Range}</span>
         <span className={styles["range-2"]}>{positive2Range}</span>
      </div>
   )
}

export default NumSelect;
