import {doc, getDoc, onSnapshot, setDoc, updateDoc} from "firebase/firestore";
import {LikedMartialArtsCollection} from "./collections";
import {useEffect, useState} from "react";
import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth";
import {ILikedMartialArts} from "../Models/ILikedMartialArts";

export default function useLikedSports() {

    const [user, setUser] = useState(auth.currentUser);
    const [likedMartialArts, setLikedMartialArts] = useState<ILikedMartialArts>({liked: []})

    useEffect(() => onAuthStateChanged(auth, setUser), []);

    useEffect(() => {
        if (user?.uid) {
            return onSnapshot(
                doc(LikedMartialArtsCollection, user.uid),
                doc =>
                    setLikedMartialArts(doc.data() ?? { liked: [] }));
        }
    }, [user]);

    const setLike = (uid: string) =>
        setDoc(doc(LikedMartialArtsCollection, uid), {liked: []}).then();

    const addLike = async (route: string) => {
        if (!user?.uid) return;

        const docRef = doc(LikedMartialArtsCollection, user.uid);

        const currentLikes = (await getDoc(docRef)).data()?.liked ?? [];
        const updatedLikes = currentLikes.includes(route) ? currentLikes.filter(r => r !== route) : [...currentLikes, route];

        await updateDoc(docRef, "liked", updatedLikes);
    }

    return {addLike, setLike, likedMartialArts}
}