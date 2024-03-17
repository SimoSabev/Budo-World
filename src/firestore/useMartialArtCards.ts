import {useNavigate} from "react-router-dom";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {MartialArtsCardsCollection} from "./collections";
import {IMartialArtCard} from "../Models/MartialArtCard";

export default function useMartialArtCards() {
    const navigate = useNavigate();

    const set = (martialArtCard: IMartialArtCard) => setDoc(
        doc(
            MartialArtsCardsCollection,
            martialArtCard.route
        ),
        martialArtCard
    );

    const get = async (route: string) => {
        const data = await getDoc(
            doc(
                MartialArtsCardsCollection,
                route)
        );

        if (!data.exists()) navigate("/404");
        return data.data();
    }

    return {get, set}
}