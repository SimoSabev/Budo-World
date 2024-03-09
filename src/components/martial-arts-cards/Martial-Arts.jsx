import React, { useState } from "react";
import Card from "./martial-arts-cards";
import styles from "./Martial-Arts.module.css";
import { Link } from "react-router-dom";

const MartialArts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const martialArtsData = [
    {
      id: "card-1",
      imageSrc:
        "https://i.pinimg.com/236x/04/ec/24/04ec24f5a3090d2357700296273ae7ac.jpg",
      heading: "Айкидо",
      type: ["self-defense", "grappling", "striking", "east-martial-art",],
    },
    {
      id: "card-2",
      imageSrc:
        "https://i.pinimg.com/236x/f2/f6/06/f2f6068a98713a30a0b6b10656c51ea8.jpg",
      heading: "Кикбокс",
      type: ["self-defense","combat-sport", "striking", "kicking", ]
    },
    {
      id: "card-3",
      imageSrc:
        "https://i.pinimg.com/236x/65/b7/98/65b798f8d6889f829791f2b6fb6703f9.jpg",
      heading: "Бокс",
      type: ["self-defense","combat-sport", "striking",]
    },
    {
      id: "card-4",
      imageSrc:
        "https://i.pinimg.com/236x/62/f3/63/62f363428d40c68a7793d6e9b87b51fc.jpg",
      heading: "Муай Тай",
      type: ["self-defense", "combat-sport", "east-martial-art", "striking", "kicking",,]
    },
    {
      id: "card-5",
      imageSrc:
        "https://i.pinimg.com/236x/e3/19/a6/e319a61f8506ed09ee3a3d606b6bed67.jpg",
      heading: "Борба",
      type: ["self-defense","combat-sport", "grappling",]
    },
    {
      id: "card-6",
      imageSrc:
        "https://i.pinimg.com/236x/6b/33/c2/6b33c219f342f0da2f36307199d27172.jpg",
      heading: "Таеклондо",
      type: ["self-defense","combat-sport", "kicking",]
    },
    {
      id: "card-7",
      imageSrc:
        "https://i.pinimg.com/236x/2d/55/fc/2d55fc892d97a554d53871828b31f047.jpg",
      heading: "Карате",
      type: ["self-defense","combat-sport", "striking",]
    },
    {
      id: "card-8",
      imageSrc:
        "https://i.pinimg.com/236x/d7/3d/9a/d73d9a9f9c1be58337e3bea3eefa0cd6.jpg",
      heading: "Крав Мага",
      type: ["self-defense", "striking", "fighting",]
    },
    {
      id: "card-9",
      imageSrc:
        "https://i.pinimg.com/236x/df/1a/58/df1a5818b09be99d27d4fb441bb99b84.jpg",
      heading: "Йаидо",
      type: ["weapon", "east-martial-art", ]
    },
    {
      id: "card-10",
      imageSrc:
        "https://i.pinimg.com/236x/f1/40/d1/f140d1fc21f261f668ae895319cfc292.jpg",
      heading: "ММА",
      type: ["self-defense","combat-sport", "striking", "kicking", "grappling"]
    },
    {
      id: "card-11",
      imageSrc:
        "https://i.pinimg.com/236x/33/98/36/33983681b4f7e0d42d19c76adc63a16b.jpg",
      heading: "Джудо",
      type: ["self-defense","combat-sport", "grappling",]
    },
    {
      id: "card-12",
      imageSrc:
        "https://i.pinimg.com/236x/06/11/ea/0611ea152313da63dd8e309c2e73e873.jpg",
      heading: "Б-ДЖ-ДЖ",
      type: ["self-defense","combat-sport", "grappling",]
    },
    {
      id: "card-13",
      imageSrc:
        "https://i.pinimg.com/236x/89/16/b6/8916b6c9be4c9ef8b35ad6a4a0e63e8f.jpg",
      heading: "Японско джу-джитсу",
      type: ["self-defense","east-martial-art", "grappling",]
    },
    {
      id: "card-14",
      imageSrc:
        "https://i.pinimg.com/236x/18/40/24/184024656b156b737243fef7406ca6c6.jpg",
      heading: "Самбо",
      type: ["self-defense","combat-sport", "striking", "kicking", ]
    },
    {
      id: "card-15",
      imageSrc:
        "https://i.pinimg.com/236x/d6/58/b5/d658b5b9beeef877f6885f90bdfcaab6.jpg",
      heading: "Винг чун",
      type: ["east-martial-art", "striking"]
    },
    {
      id: "card-16",
      imageSrc:
        "https://i.pinimg.com/236x/95/fa/9d/95fa9d110002924209f1ac7e833f3f81.jpg  ",
      heading: "Кунг фу",
      type: ["east-martial-art", "striking", "kicking"]
    },
    {
      id: "card-17",
      imageSrc:
        "https://i.pinimg.com/236x/2c/62/bf/2c62bffb43a3ca6099918eaa8e9c3ad5.jpg",
      heading: "Летуей",
      type: ["self-defense", "combat-sport", "east-martial-art", "striking", "kicking",]
    },
    {
      id: "card-18",
      imageSrc:
        "https://i.pinimg.com/236x/a6/cb/ac/a6cbacb97f6dcf491d1c2d23dbb6772a.jpg",
      heading: "Кендо",
      type: ["weapon", "east-martial-art",]
    },
    {
      id: "card-19",
      imageSrc:
        "https://i.pinimg.com/236x/19/00/4d/19004d2454b7a2cdeeaff7f1bb639340.jpg",
      heading: "Сумо",
      type: ["east-martial-art", "combat-sport", "graplling"]
    },
    {
      id: "card-20",
      imageSrc:
        "https://i.pinimg.com/236x/6c/fc/20/6cfc20be0fcd54792d2d16d3780baf9a.jpg",
      heading: "Тай чи",
      type: ["east-martial-art", "health"]
    },
    {
      id: "card-21",
      imageSrc:
        "https://i.pinimg.com/236x/15/3c/28/153c2872f8913a3e15560cb28e388dd5.jpg",
      heading: "Йога",
      type: ["east-martial-art", "health"]
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

export default MartialArts;
