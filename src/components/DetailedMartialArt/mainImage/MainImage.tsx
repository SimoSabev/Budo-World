import React from 'react';
import styles from './MainImage.module.css';

export default function MartialArtMainImage ({imageSrc}: {imageSrc: string}) {
  return (
    <div>
        <img className={styles.logo} src={imageSrc}/>
    </div>
  )
}
