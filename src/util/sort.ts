import { SortTypes } from "../enums/hotels";
import { HotelData } from "../types/hotels";

export function sortHotels(hotels: HotelData[], sortMethod: SortTypes) {
  switch (sortMethod) {
    case SortTypes.AToZ:
      return hotels.sort((a, b) => a.name.localeCompare(b.name));
    case SortTypes.Rating:
      return hotels.sort((a, b) => b.rating - a.rating);
    default: // SortTypes.Price
      return hotels.sort((a, b) => a.priceGBP - b.priceGBP);
  }
}
