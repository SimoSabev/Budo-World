import React from "react";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Filter4_Cards from "../../../components/Filter-components/Filter4-cards.jsx";
import styles from "../../Martial-Arts/Martial.module.css";

const Filter3 = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter4_Cards />
        </div>
      </div>
    </div>
  );
};

export default Filter3;
