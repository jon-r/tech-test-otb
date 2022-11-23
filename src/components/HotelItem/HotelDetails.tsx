import React from "react";

import { HotelData } from "../../types/hotels";
import { formatDate } from "../../util/formatting";
import BookNowButton from "./BookNowButton";
import Rating from "./Rating";

import styles from "./styles.module.scss";

interface HotelDetailsProps {
  hotel: HotelData;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
  const prettyDate = formatDate(new Date(hotel.departureDate));

  return (
    <div className={styles["hotel-details"]}>
      <h2 className={styles["hotel-details__title"]}>{hotel.name}</h2>
      <h4 className={styles["hotel-details__subtitle"]}>{hotel.location}</h4>

      <Rating rating={hotel.rating} />

      <ul className={styles["hotel-details__list"]}>
        <li>
          <strong>{hotel.guests}</strong>
        </li>
        <li>
          <strong>{prettyDate}</strong> for{" "}
          <strong>{hotel.durationDays} days</strong>
        </li>
        <li>
          departing from <strong>{hotel.departingFrom}</strong>
        </li>
      </ul>

      <BookNowButton hotel={hotel} />
    </div>
  );
};

export default HotelDetails;
