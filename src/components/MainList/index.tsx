import React, { useEffect } from "react";

import { useHotelsContext } from "../../state/hotels";
import HotelItem from "../HotelItem";

import styles from "./styles.module.scss";

const MainList: React.FC = () => {
  const { hotels, fetchHotels } = useHotelsContext();

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <main className={styles["main-list"]}>
      {hotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </main>
  );
};

export default MainList;
