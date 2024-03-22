import {useNavigate} from "react-router-dom";
import {doc, getDoc, setDoc, getDocs} from "firebase/firestore";
import {MartialArtsCardsCollection} from "./collections";
import {IMartialArtCard} from "../Models/MartialArtCard";

export default function useMartialArtCards() {
    const navigate = useNavigate();

    const setOne = (martialArtCard: IMartialArtCard) => setDoc(
        doc(
            MartialArtsCardsCollection,
            martialArtCard.route
        ),
        martialArtCard
    );

    const getOne = async (route: string) => {
        const data = await getDoc(
            doc(
                MartialArtsCardsCollection,
                route)
        );

        if (!data.exists()) navigate("/404");
        return data.data();
    }

    const getAll = () => getDocs(MartialArtsCardsCollection);


    const getFiltered = async (searchTerm: string = "", types: string[] = []) =>
        (await getAll()).docs
            .map((martialArtsData) =>
                martialArtsData.data()
            )
            .filter((martialArtCard) =>
                types.length !== 0 ?
                (types.filter(value => martialArtCard.type.includes(value)).length / types.length) * 100 >= 50 : true
            )
            .filter((martialArtCard) =>
                martialArtCard.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
                martialArtCard.route.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) =>
                a.heading.localeCompare(b.heading)
            );

    return {getOne, setOne, getAll, getFiltered}
}