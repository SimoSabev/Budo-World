import React, {ChangeEvent, useState} from "react";
import styles from "./organisation-cards.module.css";
import {ISportsClub} from "../../../Models/SportsClub";

export default function OrganisationCards({organisations}: { organisations: ISportsClub[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredCities = organisations ? organisations.filter((sportClub) =>
        sportClub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sportClub.city.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];


    return (
        <div className={styles.main}>
            <div className={styles.searchBar}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Търсете школа"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className={styles.container}>
                {filteredCities.map((sportClub, index) => (
                    <div className={styles[`card${index + 1}`]} key={index}>
                        <div className={styles.materialCard}>
                            <img
                                className={styles.cardPicture}
                                src={sportClub.imageSrc} // Use index to select corresponding image URL
                                alt="city"
                            />
                            <div className={styles.cardInfo}>
                                <h2 className={styles.cardTitle}>{sportClub.name}</h2>
                                <p className={styles.cardDesc}>{sportClub.city}</p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
