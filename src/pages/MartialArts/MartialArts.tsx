import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import GlobalLayout from "../../components/layouts/globalLayout/globalLayout";
import {Link, useSearchParams} from "react-router-dom";
import {martialArtsData} from "../../Data/martial-arts";
import styles from "./Martial.module.css";
import Card from "../../components/martial-arts-cards/martial-arts-cards";

export default function Martial() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [searchTerm, setSearchTerm] = useState("");

    const mounted = useRef(false);

    useEffect(() => {
        setSearchParams({search: searchTerm})
        if (!mounted.current) {
            if (searchParams.get("search") && searchParams.get("search") !== "")
                setSearchTerm(() => searchParams.get("search")!);
            mounted.current = true;
        }

        setSearchParams(() => ({search: searchTerm}));
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
                        placeholder="Search martial arts..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    {/* Map through rows and display each row */}
                    {rows.map((row, rowIndex) => (
                        <section key={rowIndex} className={styles.section}>
                            {row.map((card) => (
                                <Link key={card.id} to={`${card.route}`}>
                                    <Card currentMartialArt={card}/>
                                </Link>
                            ))}
                        </section>
                    ))}
                </div>
            </div>
        </GlobalLayout>
    );
}
