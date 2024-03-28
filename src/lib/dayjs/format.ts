import dayjs from "dayjs";
export default function format(day: Date | string | number) {
  return dayjs(day).format("YYYY-MM-DD");
}
export function formatShort(day: Date | string | number) {
  return dayjs(day).format("YY. MM. DD.");
}
