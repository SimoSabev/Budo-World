import {doc, getDoc, setDoc} from "firebase/firestore";
import {QuestionsCollection} from "./collections";
import {IQuestion} from "../Models/Question";
import {useNavigate} from "react-router-dom";

export default function useQuestions() {

    const navigate = useNavigate();

    const setOne = (question: IQuestion) => setDoc(
        doc(
            QuestionsCollection,
            `${question.id}`
        ),
        question
    );

    const getOne = async (route: string) => {
        const data = await getDoc(
            doc(
                QuestionsCollection,
                route)
        );

        if (!data.exists()) navigate("/questions/finalize");
        return data.data();
    }

    return {setOne, getOne}
}