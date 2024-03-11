import React, {ChangeEvent, useState} from "react";
import Card from "../martial-arts-cards/martial-arts-cards";
import styles from "../../components/martial-arts-cards/Martial-Arts.module.css";
import { Link } from "react-router-dom";

const Filter1_Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const martialArtsData = [
    {
      id: "card-1",
      imageSrc:
        "https://i.pinimg.com/236x/62/f3/63/62f363428d40c68a7793d6e9b87b51fc.jpg",
      heading: "Muay Thai",
    },
    {
      id: "card-2",
      imageSrc:
        "https://i.pinimg.com/236x/6b/33/c2/6b33c219f342f0da2f36307199d27172.jpg",
      heading: "Taekwondo",
    },
    {
      id: "card-3",
      imageSrc:
        "https://i.pinimg.com/236x/2d/55/fc/2d55fc892d97a554d53871828b31f047.jpg",
      heading: "Karate",
    },
    {
      id: "card-4",
      imageSrc:
        "https://i.pinimg.com/236x/d6/58/b5/d658b5b9beeef877f6885f90bdfcaab6.jpg",
      heading: "Wing Chun",
    },
    {
      id: "card-5",
      imageSrc:
        "https://i.pinimg.com/236x/95/fa/9d/95fa9d110002924209f1ac7e833f3f81.jpg  ",
      heading: "Kung fu",
    },
    {
      id: "card-6",
      imageSrc:
        "https://i.pinimg.com/236x/2c/62/bf/2c62bffb43a3ca6099918eaa8e9c3ad5.jpg",
      heading: "Lethwei",
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

export default Filter1_Cards;
