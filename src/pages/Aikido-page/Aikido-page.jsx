import React from 'react';
import styles from './Aikido-page.module.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import History from '../../components/Aikido/History/History.jsx';
import EmblaCarousel from '../../components/Aikido/organisation-cards/organisation-cards.jsx';

const Aikido_page = () => {
  return (
    <div className={styles.container}>
        <div>
            <div>
                <Navbar/>
            </div>  
            <div>
                <History/>
            </div>
            <div>
              <EmblaCarousel/>
            </div>
        </div>
    </div>
  )
}

export default Aikido_page;