import {useNavigate} from "react-router-dom";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {MartialArtsDetailedCollection} from "./collections";
import {IDetailedMartialArtMap} from "../Models/martial-arts/IDetailedMartialArt";

export default function useDetailedMartialArt(name: string) {
    const navigate = useNavigate();

    const set = (detailedMartialArt: IDetailedMartialArtMap) =>
        setDoc(
            doc(
                MartialArtsDetailedCollection,
                detailedMartialArt.name),
            detailedMartialArt.data
        );


    const get = async () => {
        const data = await getDoc(
            doc(
                MartialArtsDetailedCollection,
                name)
        );

        if (!data.exists()) navigate("/404");
        return data.data();
    }


    return {get, set}
}