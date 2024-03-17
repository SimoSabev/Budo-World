import React, { useState } from "react";
import Card from "../martial-arts-cards/martial-arts-cards";
import styles from "../../components/martial-arts-cards/Martial-Arts.module.css";
import { Link } from "react-router-dom";

const Filter6_Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const martialArtsData = [
    {
      id: "card-20",
      imageSrc:
        "https://i.pinimg.com/236x/6c/fc/20/6cfc20be0fcd54792d2d16d3780baf9a.jpg",
      heading: "Tai chi",
    },
    {
      id: "card-21",
      imageSrc:
        "https://i.pinimg.com/236x/15/3c/28/153c2872f8913a3e15560cb28e388dd5.jpg",
      heading: "Yoga",
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

export default Filter6_Cards;
