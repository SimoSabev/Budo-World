import { JSX } from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from "./globalLayout.module.css";

export default function GlobalLayout({children}: {children: JSX.Element}) {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className={styles.centerContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}