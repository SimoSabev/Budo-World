import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../../firebase-config";
import styles from './Signup.module.css';

const Signup = () => {
   const [registerEmail, setRegisterEmail] = useState('');
   const [registerPassword, setRegisterPassword] = useState('');
   const [user, setUser] = useState(null);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser || null); // Set to null if currentUser is null
      });

      return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
   }, []);

   const signup = async () => {
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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
               <button className={styles.button} onClick={signup}> Създай профил</button>
            </div>

            <div className={styles.link_element}>
               <p className={styles.link1}>Вече имате акаунт? </p>
               <Link className={styles.link2} to="/login">Впиши се</Link>
            </div>
         </div>

         <div className={styles.user}>
            {user?.email} &nbsp;&nbsp;&nbsp;
            <button className={styles.signout} onClick={signout}> Отписване </button>
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
}

export default Signup;
