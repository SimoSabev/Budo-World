import React, {useState, useEffect} from "react";
import Question from "../../components/Question/Question";
import styles from "./Questionnaire.module.css";
import {createSearchParams, Link, useNavigate, useParams} from "react-router-dom";
import {IQuestion} from "../../Models/Question";
import useQuestions from "../../firestore/useQuestions"

export default function Questionnaire() {
    const {getOne} = useQuestions();

    const navigate = useNavigate();
    const [answers, setAnswers] = useState<string[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<IQuestion>();
    const [finalize, setFinalize] = useState(false);

    const {questionId} = useParams<string>();

    useEffect(() => {
        if (!questionId) navigate("1");
        else if (questionId == "finalize") setFinalize(true)
        else if (questionId) getOne(questionId).then(r => setCurrentQuestion(r));
    }, [questionId]);

    useEffect(() => {
        if (finalize) navigate({
            pathname: "/martial-arts",
            search: createSearchParams({type: answers.join(",")}).toString()
        });
    }, [finalize]);

    const handleAnswer = (selectedAnswer: string[]) => {
        setAnswers((prevState) => [...prevState, ...selectedAnswer]);
        navigate(`/questions/${(currentQuestion?.id as number) + 1}`)
    };

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className={styles.main_container}>
            <button className={styles.back_button} onClick={handleBack}>
                <div className={styles.back_button_text}>
                    Назад
                </div>
            </button>
            <div className={styles.container}>
                <div className={styles.questionnaire_container}>
                    {currentQuestion ? (
                        <div className={styles.link_button}>
                            <Question
                                currentQuestion={currentQuestion}
                                onAnswer={handleAnswer}
                            />
                        </div>
                    ) : (
                        <div className={styles.result_container}>
                            <h2>Не успяхме да намерим подходящи предложения за Вас</h2>
                            <Link className={styles.link_button} to={"/martial-arts"}>
                                Към всички предложения
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
