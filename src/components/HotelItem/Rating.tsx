import React from "react";
import { MdStar } from "react-icons/md";

import styles from "./styles.module.scss";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const ratingToStars = [...Array(rating)].map((_, i) => <MdStar key={i} />);
  const ratingToText = `Rated ${rating} stars`;

  return (
    <div className={styles["hotel-details__rating"]}>
      <span className={styles["screen-reader-text"]}>{ratingToText}</span>
      {ratingToStars}
    </div>
  );
};

export default Rating;
