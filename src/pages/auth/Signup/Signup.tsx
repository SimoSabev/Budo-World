import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../../../firebase-config";
import styles from './Signup.module.css';

export default function Signup() {
   const [registerEmail, setRegisterEmail] = useState('');
   const [registerPassword, setRegisterPassword] = useState('');
   const [user, setUser] = useState<any>(null);
   const [registered, setRegistered] = useState(false);

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
         setRegistered(true); // Set registered state to true after successful signup
      } catch (error: any) { // TODO: Make it a type dependent
         console.error(error.message);
      }
   };

   const signout = async () => {
      try {
         await signOut(auth);
      } catch (error: any) { // TODO: Make it a type dependent
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
               {!registered && <button className={styles.button} onClick={signup}> Създай профил</button>}
               {registered && (
                  <Link to="/martial-arts">
                     <button className={styles.button}>
                        Напред
                     </button>
                  </Link>
               )}
            </div>

            <div className={styles.link_element}>
               <p className={styles.link1}>Вече имате акаунт? </p>
               <Link className={styles.link2} to="/auth/login">Впиши се</Link>
            </div>
         </div>

         <div className={styles.user}>
            {user?.email} &nbsp;&nbsp;&nbsp;
            {!registered && (
               <button className={styles.signout} onClick={signout}> Отписване </button>
            )}
         </div>
      </div>
   );
}
