import toRangeNum from "./toRangeNum";

export default function getPrevRangeNum(
   value: number,
   min: number,
   max: number,
   range: number
): string {
   const diff = value - range;
   if (diff < min) {
      return toRangeNum(max + diff);
   }
   return toRangeNum(diff);
}