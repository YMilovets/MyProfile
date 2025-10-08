export default function getDate(
  date: Date,
  format: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  }
) {
  return Intl.DateTimeFormat("ru-ru", format).format(date);
}
