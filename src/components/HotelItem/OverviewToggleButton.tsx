import React from "react";
import { MdChevronRight } from "react-icons/md";
import classnames from "classnames";

import styles from "./styles.module.scss";

interface OverviewToggleButtonProps {
  isOpen: boolean;
  toggleIsOpen(): void;
}

const OverviewToggleButton: React.FC<OverviewToggleButtonProps> = ({
  isOpen,
  toggleIsOpen,
}) => {
  return (
    <button
      type="button"
      className={styles["hotel-overview-button"]}
      onClick={toggleIsOpen}
      aria-expanded={isOpen}
    >
      <span>
        <strong>{isOpen ? "Read less" : "Read more"} </strong>
        about this hotel
      </span>

      <MdChevronRight
        className={classnames(
          styles["hotel-overview-button__arrow"],
          isOpen && styles["hotel-overview-button__arrow--is-active"]
        )}
      />
    </button>
  );
};

export default OverviewToggleButton;
