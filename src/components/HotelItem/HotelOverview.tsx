import React from "react";

import styles from "./styles.module.scss";

interface HotelOverviewProps {
  description: string;
}

const HotelOverview: React.FC<HotelOverviewProps> = ({ description }) => {
  return (
    <article className={styles["hotel-overview"]}>
      <h4 className={styles["hotel-overview__title"]}>Overview</h4>
      <p>{description}</p>
    </article>
  );
};

export default HotelOverview;
