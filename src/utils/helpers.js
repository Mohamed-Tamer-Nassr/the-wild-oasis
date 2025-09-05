import { differenceInDays, formatDistance, parseISO } from "date-fns";

const toDate = (val) => (val instanceof Date ? val : parseISO(String(val)));

export const subtractDates = (date1, date2) =>
  differenceInDays(toDate(date1), toDate(date2));

export const formatDistanceFromNow = (date) =>
  formatDistance(toDate(date), new Date(), { addSuffix: true })
    .replace("about ", "")
    .replace("in", "In");

export const getToday = (options = {}) => {
  const today = new Date();
  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value, currency = "USD", locale = "en") =>
  new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
