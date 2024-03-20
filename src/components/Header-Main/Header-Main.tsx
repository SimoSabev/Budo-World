import React from "react";
import styles from "./Header-Main.module.css";
import { useNavigate } from "react-router-dom";

const HeaderMain = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <div>
          <h1 className={styles.header}>
            {/*Тук може да откриете всичко за бойните изкуства и как да започнете да се заниавате с тях*/}
           <div className={styles.header_first}>Добре дошли в</div> Будо Свят
          </h1>
          <h3 className={styles.min_header}>
            {" "}
            Tвоят верен помощник в бойните изкуства
          </h3>
        </div>

        <div className={styles.button_group}>
          <button
            type="button"
            className={`${styles.button} ${styles.button1}`}
            onClick={() => navigate("/martial-arts")}
          >
            <span className={styles.text}>Напред</span>
            <img
              className={styles.img2}
              src="https://cdn-icons-png.flaticon.com/128/3272/3272603.png"
            />
          </button>

          <button
            type="button"
            className={`${styles.button} ${styles.button2}`}
            onClick={() => navigate("/questions")}
          >
            <img
              className={styles.img1}
              src="https://cdn-icons-png.flaticon.com/128/3940/3940182.png"
            />
            <span className={styles.text}>Кое ми подхожда</span>
          </button>
        </div>
      </div>

      <div className={styles.Image}>
        <img
          className={styles.img}
          src="https://cdn.discordapp.com/attachments/1171074802816126996/1206328492527198290/bushido_1.png?ex=6609c075&is=65f74b75&hm=6bc4de5d0133c0fc80fd74dac119d8fe4b3c8c5baef01533c892091ee4426e7e&"
        />
      </div>
    </div>
  );
};

export default HeaderMain;
