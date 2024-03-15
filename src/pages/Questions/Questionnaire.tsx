import React, { useState, useEffect } from "react";
import Question from "./Question";
import styles from "./Questionnaire.module.css";
import { Link, useNavigate } from "react-router-dom";
import {questions} from "../../Data/questions";

export default function Questionnaire () {
  const [answers, setAnswers] = useState<{questionId: number, selectedAnswer: number, points: number}[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (questionId: number, selectedAnswer: number) => {
    const points = questions[currentQuestion].options[selectedAnswer].points;

    // Add the points to the total score
    setTotalScore((prevScore) => prevScore + points);

    // Update the answers array with the question ID, selected answer, and points
    setAnswers([...answers, { questionId, selectedAnswer, points }]);

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion === questions.length) {
      if (totalScore >= 60 && totalScore < 100) {
        navigate("/filter1");
      } 
      else if (totalScore >= 100 && totalScore < 510) {
        navigate("/filter2");
      }
      else if (totalScore >= 510 && totalScore < 550) {
        navigate("/filter3");
      } 
      else if (totalScore >= 550 && totalScore < 2000) {
        navigate("/filter4");
      } 
      else if (totalScore >= 2000 && totalScore < 5000) {
        navigate("/filter5");
      } 
      else if (totalScore >= 5000) {
        navigate("/filter6");
      }
    }
  }, [currentQuestion, totalScore, navigate, questions.length]);

  return (
    <div className={styles.main_container}>
      <Link to="/">
        <div>
          <button type="button" className={styles.back_button}>
            Назад
          </button>
        </div>
      </Link>
      <div className={styles.container}>
        <div className={styles.questionnaire_container}>
          {currentQuestion < questions.length ? (
              <div className={styles.link_button}>
                <Question
                    id={questions[currentQuestion].id}
                    text={questions[currentQuestion].question}
                    options={questions[currentQuestion].options}
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
