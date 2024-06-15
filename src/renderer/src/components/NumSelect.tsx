import toRangeNum from "@renderer/utils/toRangeNum";
import { useState } from "react";

interface Props {
   min: number;
   max: number;
}

function NumSelect(props: Props): JSX.Element {
   const {min, max} = props;
   const [value, setValue] = useState<number>(min);

   return <div>
      <span>{toRangeNum(value)}</span>
      <span>{toRangeNum(value)}</span>
      <span>{toRangeNum(value)}</span>
      <span>{toRangeNum(value)}</span>
      <span>{toRangeNum(value)}</span>
   </div>
}

export default NumSelect;
