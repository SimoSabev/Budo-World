import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Filter2_Cards from "../../../components/Filter-components/Filter2-cards";
import styles from "../../Martial-Arts/Martial.module.css";

const Filter2 = () => {
  return (
    <div className={styles.Container}>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Filter2_Cards />
        </div>
      </div>
    </div>
  );
};

export default Filter2;
