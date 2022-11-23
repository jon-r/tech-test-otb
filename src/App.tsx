import React from "react";

import MainList from "./components/MainList";
import Sidebar from "./components/Sidebar";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles["app"]}>
      <Sidebar />
      <MainList />
    </div>
  );
};

export default App;
