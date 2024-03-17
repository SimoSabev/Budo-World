import {doc, getDoc, setDoc} from "firebase/firestore";
import {SportsClubsCollection} from "./collections";
import {ISportsClub} from "../Models/SportsClub";
import {useNavigate} from "react-router-dom";

export default function useSportsClub() {
    const navigate = useNavigate();

    const set = (sportClub: ISportsClub) => setDoc(
        doc(
            SportsClubsCollection,
            sportClub.route
        ),
        sportClub
    );
    const get = async (route: string) => {
        const data = await getDoc(
            doc(
                SportsClubsCollection,
                route)
        );

        if (!data.exists()) navigate("/404");
        return data.data();
    }

    return {get, set};
}