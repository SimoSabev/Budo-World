import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
// import bcrypt from 'bcrypt';
import styles from './Login.module.css';

const Login = () => {
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null); // Set to null if currentUser is null
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, []);

  const login = async () => {
    try {
      // const hashedPassword = await bcrypt.hash(loginPassword, 10);

      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
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
              setloginEmail(event.target.value);
            }}
          />
          <input
            className={styles.Password}
            placeholder="Парола..."
            type="password"
            onChange={(event) => {
              setloginPassword(event.target.value);
            }}
          />

          <button className={styles.button} onClick={login}>
            Влезте в профила си
          </button>
        </div>

        <div className={styles.link_element}>
          <p className={styles.link1}>Нямате акаунт? </p>
          <Link className={styles.link2} to="/signup">
            Регистрирай се
          </Link>
        </div>
      </div>
      <div className={styles.user}>
        {user?.email} &nbsp;&nbsp;&nbsp;
        <Link to="/signup">
          <button className={styles.signout} onClick={signout}>
            Отписване
          </button>
        </Link>
      </div>
      <div>
        <Link to="/">
            <button className={styles.go_back} onClick={signout}>
              Назад
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Login;
