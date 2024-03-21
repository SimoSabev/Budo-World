import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";
import {useSearchParams} from "react-router-dom";
import styles from "./Martial.module.css";
import Card from "../../components/martial-arts-cards/martial-arts-cards";
import useMartialArtCards from "../../firestore/useMartialArtCards";
import {IMartialArtCard} from "../../Models/MartialArtCard";

export default function Martial() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCards, setFilteredCards] = useState<IMartialArtCard[]>([]);

    const mounted = useRef(false);

    const {getFiltered} = useMartialArtCards();

    useEffect(() => {
        if (!mounted.current) {
            if (searchParams.get("search") && searchParams.get("search") !== "")
                setSearchTerm(() => searchParams.get("search")!);
            mounted.current = true;
        }

        setSearchParams(() => ({search: searchTerm}));
        getFiltered(searchTerm).then((r) => setFilteredCards(r))
    }, [searchTerm]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    // Split the cards into rows of 4
    const rows = [];
    for (let i = 0; i < filteredCards.length; i += 4) {
        rows.push(filteredCards.slice(i, i + 4));
    }

    return (
        <GlobalLayout>
            <div className={styles.container}>
                {/* Search Bar */}
                <div className={styles.search_bar_wrapper}>
                    <input
                        className={styles.search_bar}
                        type="text"
                        placeholder="Потърсете бойни изкуства..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    {/* Map through rows and display each row */}
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className={styles.section}>
                            {row.map((card, cardIndex) => (
                                <Card currentMartialArt={card} key={rowIndex + cardIndex}/>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </GlobalLayout>
    );
}
