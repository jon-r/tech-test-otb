const LOCALE = "en-GB";

export function formatCurrency(value: number, currency = "GBP") {
  return value.toLocaleString(LOCALE, { style: "currency", currency });
}

export function formatDate(
  utcDate: Date,
  opts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
) {
  return new Intl.DateTimeFormat(LOCALE, opts).format(utcDate);
}
