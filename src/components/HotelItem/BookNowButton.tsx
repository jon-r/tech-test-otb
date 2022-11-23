import React from "react";

import { useHotelsContext } from "../../state/hotels";
import { HotelData } from "../../types/hotels";
import styles from "./styles.module.scss";
import { formatCurrency } from "../../util/formatting";

interface BookNowButtonProps {
  hotel: HotelData;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ hotel }) => {
  const { bookHotel } = useHotelsContext();

  return (
    <button
      type="button"
      className={styles["book-now-button"]}
      onClick={() => bookHotel(hotel.id)}
    >
      <span>Book Now</span>
      <span className={styles["book-now-button__price"]}>
        {formatCurrency(hotel.priceGBP)}
      </span>
    </button>
  );
};

export default BookNowButton;
