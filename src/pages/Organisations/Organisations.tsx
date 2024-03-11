import React from 'react';
import styles from './Organisations.module.css';
import OrganisationCards from '../../components/Aikido/organisation-cards/organisation-cards'

export default function Organisations() {

  return (
    <div className={styles.container}>
      <div>
        <OrganisationCards/>
      </div>
    </div>
  );
}
