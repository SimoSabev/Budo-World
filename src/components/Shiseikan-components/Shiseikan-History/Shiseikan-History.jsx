import React from "react";
import styles from "./Shiseikan-History.module.css";
import ReactPlayer from "react-player";

const Shiseikan_History = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.header_group}>
        <div>
          <img className={styles.img} src="Images/Shiseikan_image.png" alt="dsafcuyguyguy"></img>
        </div>
        <div className={styles.header}>Шисейкан Айкидо доджо Варна</div>
      </div>
      <div className={styles.image_group}>
        <img
          className={styles.images}
          src="Images/Gallery4.jpg"
        ></img>
        <img
          className={styles.images}
          src="Images/SVE_2875.jpg"
        ></img>
        <img
          className={styles.images}
          src="Images/SVE_2001.jpg"
        ></img>
        <img
          className={styles.images}
          src="Images/SVE_1945.jpg"
        ></img>
        <img
          className={styles.images}
          src="Images/SVE_1753.jpg"
        ></img>
        <img className={styles.images} src=""></img>
        <img
          className={styles.images}
          src="Images/SVE_2960.jpg"
        ></img>
        <img
          className={styles.images}
          src="Images/Gallery2.jpg"
        ></img>
        <img
          className={styles.images}
          src="Images/Gallery3.jpg"
        ></img>
      </div>

      <div className={styles.video_group}>
        <div className={styles.video}>
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        </div>
        <div className={styles.video}>
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        </div>
      </div>

      <div className={styles.history_group}>
        <h1 className={styles.history}>
            Шисейкан Айкидо Доджо e член и представител за България на Aikido World
            Alliance /AWA/. Клубът предлага на членовете си на национално и
            международно ниво, стандартизирани изисквания за обучение в ученическа
            /mudansha/ и майсторска степен /yudansha/, сертифицирани от AIKIKAI
            FOUNDATION /WORLD HEADQUARTERS/ в Токио, Япония. Организира Айкидо
            семинари, лагери и учебни курсове, за да дава възможност на обучаващите
            се да подобрят допълнително своите умения. Клубът е основан през 1998г.
            в Плевен. Доджото се премества във Варна през 2007 година. Името
            означава: Шисей - "to reach the truth..."(да достигнеш истината) и кан -
            клуб или (място за занимания). От основаването си до 2013 година, клубът
            е бил член на Българска Айкидо Асоциация. От Юни 2013 година е член на
            осносваната от Шихан Андрю М. Сато - Aikido World Alliance.
        </h1>
      </div>

      <div className={styles.button_group}>
        <a href="http://www.aikidoshiseikan.com" className={styles.button} target="_blank"> Посетете сайта</a>
      </div>

    </div>
  );
};

export default Shiseikan_History;
