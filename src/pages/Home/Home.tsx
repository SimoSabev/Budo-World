import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeaderMain from '../../components/Header-Main/Header-Main';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Container}>
      <div>
          <div>
              <Navbar/>
          </div>
          <div>
              <HeaderMain/>
          </div>
      </div>
    </div>
  )
}

export default Home;