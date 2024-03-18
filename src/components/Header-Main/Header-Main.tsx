import React from "react";
import styles from "./Header-Main.module.css";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>

        <h1 className={styles.header}>
          Тук може да откриете всичко <br /> за бойните изкуства и как да <br />
          започнете да се заниавате с тях
        </h1>

        <div className={styles.button_group}>
          <button type="button" className={styles.button2}>
          <Link to="/martial-аrts">
          Напред
              <img
                className={styles.img2}
                src="https://cdn-icons-png.flaticon.com/128/3272/3272603.png"
              ></img>
              &nbsp; 
            </Link>
          </button>

          <button type="button" className={styles.button1}>
            <Link to="/questions">
              <img
                className={styles.img1}
                src="https://cdn-icons-png.flaticon.com/128/3940/3940182.png"
              ></img>
              &nbsp; Кое ми подхожда
            </Link>
          </button>
        </div>
      </div>

        <div className={styles.Image}>
          <img className={styles.img} src="https://cdn.discordapp.com/attachments/1171074802816126996/1206328492527198290/bushido_1.png?ex=65db9bf5&is=65c926f5&hm=8d13626fe0b59a7ae4cc74100b9a8ac7e0d7c276aafa32c3a0b63a29f1889977&" alt="" />
        </div>


        
    </div>
  );
};

export default HeaderMain;
