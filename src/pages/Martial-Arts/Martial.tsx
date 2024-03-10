import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Martial_Arts from '../../components/martial-arts-cards/Martial-Arts';
import styles from './Martial.module.css';

const Martial = () => {
  return (
    <div className={styles.Container}>
      <div>
          <div>
              <Navbar/>
          </div>
          <div>
              <Martial_Arts/>
          </div>
      </div>
    </div>
  )
  }
  
  export default Martial;