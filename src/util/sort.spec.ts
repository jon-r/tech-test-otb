import { SortTypes } from "../enums/hotels";
import { HotelData } from "./../types/hotels";
import { sortHotels } from "./sort";

describe("sort utility functions", () => {
  const testData: Partial<HotelData>[] = [
    {
      id: 1,
      name: "Aye",
      rating: 5,
      priceGBP: 200,
    },
    {
      id: 2,
      name: "Bee",
      rating: 4,
      priceGBP: 100,
    },
    {
      id: 3,
      name: "Cee",
      rating: 3,
      priceGBP: 500,
    },
  ];

  describe("sortHotels", () => {
    it("can sort hotel data alphabetically", () => {
      // @ts-expect-error - stubbed data
      const sorted = sortHotels(testData, SortTypes.AToZ);
      const expected = sorted.map((s) => s.name);

      expect(expected).toEqual(["Aye", "Bee", "Cee"]);
    });

    it("can sort hotel data by price ascending", () => {
      // @ts-expect-error - stubbed data
      const sorted = sortHotels(testData, SortTypes.Price);
      const expected = sorted.map((s) => s.priceGBP);

      expect(expected).toEqual([100, 200, 500]);
    });

    it("can sort hotel data by rating descending", () => {
      // @ts-expect-error - stubbed data
      const sorted = sortHotels(testData, SortTypes.Rating);
      const expected = sorted.map((s) => s.rating);

      expect(expected).toEqual([5, 4, 3]);
    });
  });
});
