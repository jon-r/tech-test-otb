import { vi } from "vitest";

import { HotelsService } from "./hotels";

describe("HotelsService", () => {
  describe("getHotels", () => {
    it('"fetches" hotel data', async () => {
      const expected = await HotelsService.getHotels();

      expect(expected).toMatchInlineSnapshot(`
              [
                {
                  "departingFrom": "East Midlands",
                  "departureDate": "2019-07-03T12:00:00.000Z",
                  "description": "The Iberostar Grand Salome has an excellent location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Gold del Sur and the Amarillo Golf COurses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
                  "durationDays": 7,
                  "guests": "2 Adults, 2 children & 1 infant",
                  "id": 1,
                  "image": "/hotel-image-1.png",
                  "location": "Costa Adeje, Tenerife",
                  "name": "Iberostar Grand Salome",
                  "priceGBP": 1136.5,
                  "rating": 5,
                },
                {
                  "departingFrom": "Liverpool",
                  "departureDate": "2019-05-27T12:00:00.000Z",
                  "description": "The Aquamarina Gold Hotel has an excellent location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Gold del Sur and the Amarillo Golf COurses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
                  "durationDays": 7,
                  "guests": "2 Adults, 2 children & 1 infant",
                  "id": 2,
                  "image": "/hotel-image-2.png",
                  "location": "Costa Adeje, Tenerife",
                  "name": "Aquamarina Gold Hotel",
                  "priceGBP": 696.8,
                  "rating": 4,
                },
                {
                  "departingFrom": "Manchester",
                  "departureDate": "2019-07-03T12:00:00.000Z",
                  "description": "The Las Piramides Resort has an excellent location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Gold del Sur and the Amarillo Golf COurses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
                  "durationDays": 7,
                  "guests": "2 Adults, 2 children & 1 infant",
                  "id": 3,
                  "image": "/hotel-image-3.png",
                  "location": "Costa Adeje, Tenerife",
                  "name": "Las Piramides Resort",
                  "priceGBP": 499.99,
                  "rating": 3,
                },
              ]
            `);
    });
  });

  describe("bookHotel", () => {
    it('"books" the hotel', () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {
        /* noop */
      });

      HotelsService.bookHotel(25);

      expect(consoleSpy).toBeCalledWith("user booked hotel 25!");
    });
  });
});
