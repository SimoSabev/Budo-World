import React, { useState } from "react";
import Card from "../martial-arts-cards/martial-arts-cards";
import styles from "../../components/martial-arts-cards/Martial-Arts.module.css";
import { Link } from "react-router-dom";

const Filter5_Cards = () => {
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
    id: "card-9",
    imageSrc:
      "https://i.pinimg.com/236x/df/1a/58/df1a5818b09be99d27d4fb441bb99b84.jpg",
    heading: "Iaido",
  },
  {
    id: "card-18",
    imageSrc:
      "https://i.pinimg.com/236x/a6/cb/ac/a6cbacb97f6dcf491d1c2d23dbb6772a.jpg",
    heading: "Kendo",
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
      {/*/!* Search Bar *!/*/}
      {/*<input*/}
      {/*  className={styles.search_bar}*/}
      {/*  type="text"*/}
      {/*  placeholder="Search martial arts..."*/}
      {/*  value={searchTerm}*/}
      {/*  onChange={handleSearchChange}*/}
      {/*/>*/}
      {/*<div className={styles.main}>*/}
      {/*  <div className={styles.container}>*/}
      {/*    /!* Map through rows and display each row *!/*/}
      {/*    {rows.map((row, rowIndex) => (*/}
      {/*      <section key={rowIndex} className={styles.section}>*/}
      {/*        {row.map((card) => (*/}
      {/*          <Link key={card.id} to={`/${card.heading.toLowerCase()}`}>*/}
      {/*            <Card*/}
      {/*              id={card.id}*/}
      {/*              imageSrc={card.imageSrc}*/}
      {/*              heading={card.heading}*/}
      {/*            />*/}
      {/*          </Link>*/}
      {/*        ))}*/}
      {/*      </section>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Filter5_Cards;
