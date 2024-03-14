import React from "react";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Filter5_Cards from "../../../components/Filter-components/Filter5-cards.jsx";
import styles from "../../Martial-Arts/Martial.module.css";

const Filter5 = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter5_Cards />
        </div>
      </div>
    </div>
  );
};

export default Filter5;
