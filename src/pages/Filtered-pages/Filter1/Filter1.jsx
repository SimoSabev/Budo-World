import React from "react";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Filter1_Cards from "../../../components/Filter-components/Filter1-cards.jsx";
import styles from "../../Martial-Arts/Martial.module.css";

const Filter1 = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter1_Cards />
        </div>
      </div>
    </div>
  );
};

export default Filter1;
