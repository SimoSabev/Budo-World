import React, {useState, useEffect, FormEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../firebase-config';
import styles from './Login.module.css';

export default function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState<typeof auth.currentUser>(null); // TODO: Make it a type dependent

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if(user && user.uid) navigate("/martial-arts")
    }, [user]);

    const login = async (submit: FormEvent) => {
        submit.preventDefault();
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword).catch((reason) => reason);
    };

    return (
        <div className={styles.app}>
            <div className={styles.shadow_box}>
                <form onSubmit={login} className={styles.Content}>
                    <h3 className={styles.Header}> Впиши се </h3>
                    <input
                        className={styles.Email}
                        placeholder="Имейл..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input
                        className={styles.Password}
                        placeholder="Парола..."
                        type="password"
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                    <button className={styles.button} type={"submit"}>
                        Влезте в профила си
                    </button>
                </form>

                <div className={styles.link_element}>
                    <p className={styles.link1}>Нямате акаунт? </p>
                    <Link className={styles.link2} to="/auth/signup">
                        Регистрирай се
                    </Link>
                </div>
            </div>
        </div>
    );
};
