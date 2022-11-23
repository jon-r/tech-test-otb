import React, { useState } from "react";

import { HotelData } from "../../types/hotels";
import HotelDetails from "./HotelDetails";
import HotelOverview from "./HotelOverview";
import OverviewToggleButton from "./OverviewToggleButton";

import styles from "./styles.module.scss";

interface HotelItemProps {
  hotel: HotelData;
}

const HotelItem: React.FC<HotelItemProps> = ({ hotel }) => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const toggleIsOpen = () => setIsOverviewOpen((prev) => !prev);

  return (
    <section className={styles["hotel-item"]}>
      <img
        className={styles["hotel-item__image"]}
        src={hotel.image}
        alt={`A photo of ${hotel.name}`}
      />
      <HotelDetails hotel={hotel} />
      <OverviewToggleButton
        isOpen={isOverviewOpen}
        toggleIsOpen={toggleIsOpen}
      />
      {isOverviewOpen && <HotelOverview description={hotel.description} />}
    </section>
  );
};

export default HotelItem;
