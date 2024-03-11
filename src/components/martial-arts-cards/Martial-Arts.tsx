import React, {ChangeEvent, useState} from "react";
import Card from "./martial-arts-cards";
import styles from "./Martial-Arts.module.css";
import { Link } from "react-router-dom";
import { martialArtsData } from "../../Data/martial-arts";

const MartialArts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = martialArtsData.filter((card) =>
    card.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Split the cards into rows of 4
  const rows = [];
  for (let i = 0; i < filteredCards.length; i += 4) {
    rows.push(filteredCards.slice(i, i + 4));
  }

  return (
    <div className={styles.body}>
      {/* Search Bar */}
      <input
        className={styles.search_bar}
        type="text"
        placeholder="Search martial arts..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className={styles.main}>
        <div className={styles.container}>
          {/* Map through rows and display each row */}
          {rows.map((row, rowIndex) => (
            <section key={rowIndex} className={styles.section}>
              {row.map((card) => (
                <Link key={card.id} to={`${card.route}`}>
                  <Card
                    id={card.id}
                    imageSrc={card.imageSrc}
                    heading={card.heading}
                    type={card.type}
                  />
                </Link>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MartialArts;
