import React from 'react';
import { Tilt } from 'react-tilt';
import styles from './martial-arts-cards.module.css';

const Card = ({ id, imageSrc, smallText, heading, type }) => {
  return (
      <Tilt className={`${styles.card} ${styles.rounded}`} options={{ max: 25, scale: 1.05, speed: 400 }}>
        <div id={id}>
          <div className={styles.cardOverlay}></div>
          <div className={styles.cardImage}>
            <img src={imageSrc} alt="" />
          </div>
          
          <div className={styles.cardHeading}>
            <span className={styles.small}>{smallText}</span>
            <h2>{heading}</h2>
          </div>
        </div>
      </Tilt>
  );
};

export default Card;
