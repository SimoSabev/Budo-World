// Navbar.js
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../../firebase-config";

export default function Navbar() {
    const [user, setUser] = useState<typeof auth.currentUser>(null); // TODO: Make it a type dependent

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
            setUser(currentUser || null)
        );

        return () => unsubscribe();
    }, []);

    return (
        <nav className={styles.nav_bar}>
            <div className={styles.left}>
                <li className={styles.li_1}>
                    <Link to="/">Начало</Link>
                </li>
            </div>
            <div className={styles.middle}>
                <li className={styles.li_2}>
                    <Link to="/martial-arts">Бойни изкуства</Link>
                </li>
            </div>
            <div className={styles.right}>
                <li className={styles.li_3}>
                    {(user && user.uid) ? (
                            <a type={"button"} onClick={() => signOut(auth)}>
                                Отписване
                            </a>
                        ) :
                        <Link to="/auth/login">Вписване</Link>
                    }
                </li>
            </div>
        </nav>
    );
};
