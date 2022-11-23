import { HotelData } from "../types/hotels";

import hotelData from "../../data/hotelData.json";

export const HotelsService = {
  async getHotels(): Promise<HotelData[]> {
    // delayed fetch from API ...
    await new Promise((resolve) => setTimeout(resolve, 200));

    return hotelData;
  },

  bookHotel(id: number): void {
    console.log(`user booked hotel ${id}!`);
  },
};
