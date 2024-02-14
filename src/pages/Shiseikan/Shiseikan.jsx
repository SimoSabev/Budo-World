import React from 'react'
import styles from './Shiseikan.module.css';
import Navbar from '../../components/Navbar/Navbar';

const Shiseikan = () => {
  return (
    <div className={styles.container}>
        <div>
            <Navbar/>
        </div>
        <div>
            Shiseikan-content
        </div>
    </div>
  )
}

export default Shiseikan