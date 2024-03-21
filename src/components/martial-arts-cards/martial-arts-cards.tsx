import React, {useEffect, useState} from 'react';
import {Tilt} from 'react-tilt';
import styles from './martial-arts-cards.module.css';
import {IMartialArtCard} from "../../Models/MartialArtCard";
import {Link} from "react-router-dom";
import Like from "../SVGs/Likes/Like";
import {auth} from "../../firebase-config";
import {ILikedMartialArts} from "../../Models/ILikedMartialArts";
import {onAuthStateChanged} from "firebase/auth";

export default function Card({currentMartialArt}: { currentMartialArt: IMartialArtCard }) {

    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => onAuthStateChanged(auth, setUser), []);


    return (
        <>
            <Tilt className={`${styles.card}`} options={{max: 25, scale: 1.05, speed: 400}}>
                <Link to={`/martial-arts/${currentMartialArt.route}`}>
                    {user && user.uid && <Like route={currentMartialArt.route}/>}
                    <div id={currentMartialArt.id}>
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardImage}>
                            <img src={currentMartialArt.imageSrc} alt=""/>
                        </div>

                        <div className={styles.cardHeading}>
                            {/*<span className={styles.small}>{smallText}</span>*/}
                            <h2>{currentMartialArt.heading}</h2>
                        </div>
                    </div>
                </Link>
            </Tilt>
        </>
    );
};