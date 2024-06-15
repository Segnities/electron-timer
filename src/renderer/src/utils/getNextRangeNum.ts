import toRangeNum from "./toRangeNum";

export default function getNextRangeNum(
   value: number,
   min: number,
   max: number,
   range: number
): string { 
   const diff = value + range;
   if (diff > max) {
      return toRangeNum((diff - max) + min);
   }
   return toRangeNum(diff);
}