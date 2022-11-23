import React from "react";
import classnames from "classnames";

import { SortTypes } from "../../enums/hotels";
import { IconType } from "react-icons";
import { useHotelsContext } from "../../state/hotels";

import styles from "./styles.module.scss";

export interface SidebarButtonProps {
  children: React.ReactNode;
  icon: IconType;
  sortType: SortTypes;
}

const SidebarSortButton: React.FC<SidebarButtonProps> = ({
  sortType,
  children,
  icon: Icon,
}) => {
  const { setSortMethod, sortMethod: activeSortMethod } = useHotelsContext();

  const isActive = activeSortMethod === sortType;

  return (
    <button
      type="button"
      className={classnames(
        styles["sidebar__button"],
        isActive && styles["sidebar__button--is-active"]
      )}
      onClick={() => setSortMethod(sortType)}
      aria-checked={isActive}
    >
      {/* visually text is hidden on mobile. This setup makes it always visible for screen readers */}
      <span className={styles["sidebar__text"]} aria-hidden>
        {children}
      </span>
      <span className={styles["screen-reader-text"]}>{children}</span>

      <Icon
        className={classnames(
          styles["sidebar__icon"],
          isActive && styles["sidebar__icon--is-active"]
        )}
      />
    </button>
  );
};

export default SidebarSortButton;
