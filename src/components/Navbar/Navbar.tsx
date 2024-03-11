// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav_bar}>
      <div className={styles.left}>
        <li className={styles.li_1}>
          <Link to="/">Начало</Link>
        </li>
      </div>
      <div className={styles.middle}>
        <li className={styles.li_2}>
          <Link to="/martial-arts">Бойни изкуства</Link>
        </li>
      </div>
      <div className={styles.right}>
        <li className={styles.li_3}>
          <Link to="/auth/login">Вписване</Link>
        </li>
        <li className={styles.li_3}>
          <Link to="/auth/signup">Регистрация</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
