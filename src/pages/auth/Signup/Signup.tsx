import React, {useState, useEffect, FormEvent} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {auth} from "../../../firebase-config";
import styles from './Signup.module.css';
import useLikedSports from "../../../firestore/useLikedSports";

export default function Signup() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [user, setUser] = useState<any>(null);

    const navigate = useNavigate();

    const {setLike} = useLikedSports();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null); // Set to null if currentUser is null
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
    }, []);

    useEffect(() => {
        if (user && user.uid) navigate("/martial-arts")
    }, [user]);

    const signup = async (submit: FormEvent) => {
        submit.preventDefault();
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then((value) => {
                setLike(value.user.uid);
            })
            .catch((reason) => reason);
    };

    return (
        <div className={styles.app}>
            <div className={styles.shadow_box}>
                <form onSubmit={signup} className={styles.Content}>
                    <h3 className={styles.Header}> Регистрирай се </h3>
                    <input
                        className={styles.Email}
                        placeholder="Имейл..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        className={styles.Password}
                        placeholder="Парола..."
                        type="password"
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                    <button className={styles.button} type={"submit"}>
                        Създай профил
                    </button>
                </form>

                <div className={styles.link_element}>
                    <p className={styles.link1}>Вече имате акаунт? </p>
                    <Link className={styles.link2} to="/auth/login">Впиши се</Link>
                </div>
            </div>
        </div>
    );
}
