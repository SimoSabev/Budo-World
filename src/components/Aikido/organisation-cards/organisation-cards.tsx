import React, {ChangeEvent, useState} from "react";
import styles from "./organisation-cards.module.css";
import { Link } from "react-router-dom";
import { sportsClubsData } from "../../../Data/sports-clubs";

function EmblaCarousel() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.searchBar}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search by City"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.container}>{renderCards(searchTerm)}</div>
    </div>
  );
}

const renderCards = (searchTerm: string) => {
  const filteredSportsClubsData = sportsClubsData.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredSportsClubsData.map((sportClub, index) => (
    <div className={styles[`card${index + 1}`]} key={index}>
      <Link to={sportClub.route}> {/* Use custom route for each card */}
        <a className={styles.materialCard} href={""}>
          <img
            className={styles.cardPicture}
            src={sportClub.imageSrc} // Use index to select corresponding image URL
            alt="city"
          />
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{sportClub.city}</h2>
            <p className={styles.cardDesc}>{sportClub.name}</p>
          </div>
        </a>
      </Link>
    </div>
  ));
};

export default EmblaCarousel;
