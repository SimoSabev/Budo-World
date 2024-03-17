import React, { useState } from "react";
import Card from "../martial-arts-cards/martial-arts-cards";
import styles from "../../components/martial-arts-cards/Martial-Arts.module.css";
import { Link } from "react-router-dom";

const Filter4_Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const martialArtsData = [
    {
      id: "card-5",
      imageSrc:
        "https://i.pinimg.com/236x/e3/19/a6/e319a61f8506ed09ee3a3d606b6bed67.jpg",
      heading: "Wrestling",
    },
    {
      id: "card-10",
      imageSrc:
        "https://i.pinimg.com/236x/f1/40/d1/f140d1fc21f261f668ae895319cfc292.jpg",
      heading: "MMA",
    },
    {
      id: "card-11",
      imageSrc:
        "https://i.pinimg.com/236x/33/98/36/33983681b4f7e0d42d19c76adc63a16b.jpg",
      heading: "Judo",
    },
    {
      id: "card-12",
      imageSrc:
        "https://i.pinimg.com/236x/06/11/ea/0611ea152313da63dd8e309c2e73e873.jpg",
      heading: "Brazilian Jiu-Jitsu",
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

export default Filter4_Cards;
