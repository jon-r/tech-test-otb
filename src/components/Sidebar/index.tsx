import React from "react";
import { MdSortByAlpha, MdStar } from "react-icons/md";
import { HiCurrencyPound } from "react-icons/hi";

import { SortTypes } from "../../enums/hotels";
import SidebarSortButton, { SidebarButtonProps } from "./SidebarSortButton";

import styles from "./styles.module.scss";

const BUTTONS: SidebarButtonProps[] = [
  {
    children: (
      <>
        sort <strong>alphabetically</strong>
      </>
    ),
    icon: MdSortByAlpha,
    sortType: SortTypes.AToZ,
  },
  {
    children: (
      <>
        sort by <strong>price</strong>
      </>
    ),
    icon: HiCurrencyPound,
    sortType: SortTypes.Price,
  },
  {
    children: (
      <>
        sort by <strong>star rating</strong>
      </>
    ),
    icon: MdStar,
    sortType: SortTypes.Rating,
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className={styles["sidebar"]}>
      {BUTTONS.map((btn) => (
        <SidebarSortButton key={btn.sortType} {...btn} />
      ))}
    </aside>
  );
};

export default Sidebar;
