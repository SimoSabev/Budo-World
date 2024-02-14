import React, { useState } from "react";
import styles from "./organisation-cards.module.css";
import { Link } from "react-router-dom";

function EmblaCarousel() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
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

const renderCards = (searchTerm) => {
  const cities = [
    { name: "Varna", desc: "grsfdsfdsfdsfd" },
    { name: "Бургас", desc: "grsfdsfdsfdsfd" },
    { name: "София", desc: "grsfdsfdsfdsfd" },
    { name: "Разград", desc: "grsfdsfdsfdsfd" },
    { name: "Стара Загора", desc: "grsfdsfdsfdsfd" },
    { name: "Пловдив", desc: "grsfdsfdsfdsfd" },
  ];

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredCities.map((city, index) => (
    <div className={styles[`card${index + 1}`]} key={index}>
      <Link to={"/shiseikan"}>
      <a className={styles.materialCard} href={""}>
        <img
          className={styles.cardPicture}
          src={
            "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="city"
        />
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{city.name}</h2>
          <p className={styles.cardDesc}>{city.desc}</p>
        </div>
      </a>
      </Link>
    </div>
  ));
};

export default EmblaCarousel;
