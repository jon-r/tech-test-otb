import { formatCurrency, formatDate } from "./formatting";

describe("formatting utility functions", () => {
  describe("formatCurrency", () => {
    it("formats to GBP by default", () => {
      expect(formatCurrency(123.45)).toEqual("£123.45");
    });

    it("formats to Oother currencies if configured to", () => {
      expect(formatCurrency(123.45, "USD")).toEqual("US$123.45");
      expect(formatCurrency(123.45, "EUR")).toEqual("€123.45");
    });
  });

  describe("formatDate", () => {
    const date = new Date("2022-11-20T14:00:00Z");

    it("formats a date string with native javascript APIs", () => {
      expect(formatDate(date)).toEqual("20 November 2022");
    });

    it("accepts native javascript DateTime formatting config", () => {
      let config: Intl.DateTimeFormatOptions = {
        dateStyle: "full",
        timeStyle: "full",
      };

      expect(formatDate(date, config)).toEqual(
        "Sunday, 20 November 2022 at 14:00:00 Greenwich Mean Time"
      );

      config = {
        dateStyle: "short",
      };
      expect(formatDate(date, config)).toEqual("20/11/2022");
    });
  });
});
