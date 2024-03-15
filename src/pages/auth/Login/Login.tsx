import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import styles from './Login.module.css';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState<any>(null); // TODO: Make it a type dependent
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;
      console.log(user);
      setLoggedIn(true); // Set loggedIn state to true after successful login
    } catch (error: any) {     // TODO: Make it a type dependent
      console.error(error.message);
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false); // Set loggedIn state to false after signout
    } catch (error: any) {      // TODO: Make it a type dependent
      console.error(error.message);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.shadow_box}>
        <div className={styles.Content}>
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
          {loggedIn ? (
            <Link to="/">
              <button className={styles.button}>
                Продължете напред
              </button>
            </Link>
          ) : (
            <button className={styles.button} onClick={login}>
              Влезте в профила си
            </button>
          )}
        </div>

        <div className={styles.link_element}>
          <p className={styles.link1}>Нямате акаунт? </p>
          <Link className={styles.link2} to="/auth/signup">
            Регистрирай се
          </Link>
        </div>
      </div>
      {!loggedIn && (
        <div className={styles.user}>
          {user?.email} &nbsp;&nbsp;&nbsp;
          <button className={styles.signout} onClick={signout}>
            Отписване
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
