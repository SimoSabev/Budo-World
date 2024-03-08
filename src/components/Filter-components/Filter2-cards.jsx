import React, { useState } from "react";
import Card from "../martial-arts-cards/martial-arts-cards";
import styles from "../../components/martial-arts-cards/Martial-Arts.module.css";
import { Link } from "react-router-dom";

const Filter2_Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const martialArtsData = [
    {
      id: "card-1",
      imageSrc:
        "https://i.pinimg.com/236x/04/ec/24/04ec24f5a3090d2357700296273ae7ac.jpg",
      heading: "Aikido",
    },
    {
      id: "card-11",
      imageSrc:
        "https://i.pinimg.com/236x/33/98/36/33983681b4f7e0d42d19c76adc63a16b.jpg",
      heading: "Judo",
    },
    {
      id: "card-13",
      imageSrc:
        "https://i.pinimg.com/236x/89/16/b6/8916b6c9be4c9ef8b35ad6a4a0e63e8f.jpg",
      heading: "Japanese Jiu-Jitsu",
    },
    {
      id: "card-19",
      imageSrc:
        "https://i.pinimg.com/236x/19/00/4d/19004d2454b7a2cdeeaff7f1bb639340.jpg",
      heading: "Sumo",
    },
  ];

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
                <Link key={card.id} to={`/${card.heading.toLowerCase()}`}>
                  <Card
                    id={card.id}
                    imageSrc={card.imageSrc}
                    heading={card.heading}
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

export default Filter2_Cards;
