import React from "react";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Filter6_Cards from "../../../components/Filter-components/Filter6-cards.jsx";
import styles from "../../Martial-Arts/Martial.module.css";

const Filter3 = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter6_Cards />
        </div>
      </div>
    </div>
  );
};

export default Filter3;
