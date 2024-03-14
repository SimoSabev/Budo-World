import React from 'react';
import styles from './Logo.module.css';

const Logo_Aikido = () => {
  return (
    <div>
        <div>
            <img className={styles.logo} src='http://www.aikidoshiseikan.com/Content/images/shiseikanLogo.png'></img>
        </div>
    </div>
  )
}

export default Logo_Aikido;