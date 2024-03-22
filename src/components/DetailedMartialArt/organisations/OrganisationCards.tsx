import React, {ChangeEvent, useState} from "react";
import styles from "./organisation-cards.module.css";

export default function OrganisationCards({route} : {route: string}) {
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
          placeholder="Търсете по град"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className={styles.container}>{renderCards(searchTerm)}</div>
    </div>
  );
}

function renderCards(searchTerm: string) {
  const cities = [
    { name: "Варна", desc: "Шисейкан Айкидо доджо Варна", route: "/Shiseikan" },
    { name: "Бургас", desc: "Айкикай Айкидо България", route: "/burgas" },
    { name: "София", desc: "Айкидо клуб Такуми", route: "/sofia" },
    { name: "Разград", desc: "Шисейкан Айкидо доджо Разград", route: "/razgrad" },
    { name: "Стара Загора", desc: "Айкидо Клуб Имеон Стара Загора", route: "/stara-zagora" },
    { name: "Пловдив", desc: "Айкидо клуб Каедекан доджо", route: "/plovdiv" },
  ];

  const imageUrls = [
    "Images/Shiseikan1.jpg",
    "https://aikikaibulgaria.com/index_htm_files/gallery/satori_2017/images/ITG_3446.jpg",
    "https://static.wixstatic.com/media/42e41e_a2e256d48a2248a7a07175b48c430541~mv2_d_5551_3010_s_4_2.jpg/v1/fill/w_828,h_449,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/42e41e_a2e256d48a2248a7a07175b48c430541~mv2_d_5551_3010_s_4_2.jpg",
    "https://media.gettyimages.com/id/95692353/photo/men-practicing-aikido-martial-arts.jpg?s=612x612&w=0&k=20&c=dlE07awMPk38MOis-hIs2bcWBnNF7eyZXUSvQroQV0c=",
    "https://i.pinimg.com/236x/93/8a/56/938a565e3421951c1ee56f66f96c6e6f.jpg",
    "https://aikidobg.net/wp-content/uploads/2016/06/IMG_0273-705x529.jpg",
  ];

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredCities.map((city, index) => (
    <div className={styles[`card${index + 1}`]} key={index}>
      {/*<Link to={city.route}> /!* Use custom route for each card *!/*/}
        <a className={styles.materialCard} href={""}>
          <img
            className={styles.cardPicture}
            src={imageUrls[index]} // Use index to select corresponding image URL
            alt="city"
          />
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{city.name}</h2>
            <p className={styles.cardDesc}>{city.desc}</p>
          </div>
        </a>
      {/*</Link>*/}
    </div>
  ));
}
