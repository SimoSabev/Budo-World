import React from "react";
import styles from "./TextSection.module.css";


export default function TextSection ({text, heading}: {text: string, heading: string}) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1 className={styles.header}>Какво е {heading}</h1>
              <p className={styles.content_history}>
                {text}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

