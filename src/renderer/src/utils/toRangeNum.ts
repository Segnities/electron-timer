export default function toRangeNum(num: number): string {
  if (num <= 9) {
    return `0${num}`
  }
  return num.toString()
}
