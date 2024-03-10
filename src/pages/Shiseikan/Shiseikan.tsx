import React from 'react'
import styles from './Shiseikan.module.css';
import Navbar from '../../components/Navbar/Navbar';
//import Shiseikan_History from '../../components/Shiseikan-components/Shiseikan-History/Shiseikan-History'

const Shiseikan = () => {
  return (
    <div className={styles.container}>
        <div>
            <Navbar/>
        </div>
        <div>
            {/*<Shiseikan_History/>*/}
        </div>
    </div>
  )
}

export default Shiseikan