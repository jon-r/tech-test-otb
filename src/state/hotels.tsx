import React, { useCallback, useContext, useMemo, useState } from "react";

import { SortTypes } from "../enums/hotels";
import { HotelData } from "../types/hotels";
import { HotelsService } from "../services/hotels";
import { sortHotels } from "../util/sort";

interface HotelsState {
  fetchHotels(): Promise<void>;
  setSortMethod(sortType: SortTypes): void;
  bookHotel(hotelId: number): void;

  hotels: HotelData[];
  sortMethod: SortTypes;
}

// functions set on render, no need to test
/* c8 ignore next 10 */
const INITIAL_STATE: HotelsState = {
  fetchHotels: () => Promise.resolve(/* noop */),
  setSortMethod: () => {
    /* noop */
  },
  bookHotel: () => {
    /* noop */
  },

  hotels: [],
  sortMethod: SortTypes.Price,
};

const HotelsContext = React.createContext<HotelsState>(INITIAL_STATE);

interface HotelsProviderProps {
  children: React.ReactNode;
}

export const HotelsProvider: React.FC<HotelsProviderProps> = ({ children }) => {
  const [sortMethod, setSortMethod] = useState(INITIAL_STATE.sortMethod);
  const [hotelsData, setHotelsData] = useState<HotelData[]>(
    INITIAL_STATE.hotels
  );

  const fetchHotels = useCallback(async () => {
    try {
      setHotelsData(await HotelsService.getHotels());
    } catch (err) {
      // would send error to error handling service ...
      console.warn(err);
    }
  }, [setHotelsData]);

  const bookHotel = useCallback((id: number) => {
    // would do something with this ifnormation ...
    HotelsService.bookHotel(id);
  }, []);

  const hotels = useMemo(
    () => sortHotels(hotelsData, sortMethod),
    [sortMethod, hotelsData]
  );

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        setSortMethod,
        sortMethod,
        fetchHotels,
        bookHotel,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export const useHotelsContext = () => useContext<HotelsState>(HotelsContext);
