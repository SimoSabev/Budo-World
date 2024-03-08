import React, { useState, useEffect } from "react";
import Question from "../Questions/Question.jsx";
import styles from "./Questionnaire.module.css";
import { Link, useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: "С каква цел исакте да започнете да тренирате?",
      options: ["Самозащита", "Здраве", "Увереност", "Като хоби"],
      points: [0, 0, 0, 0],
    },
    {
      id: 2,
      text: "Какъв вид бихте искали да практикувате?",
      options: [
        "Източни бойни изкусва",
        "Бойни спортове",
        "Бойни изкуства с оръжия",
        "Източни практики за здраве",
      ],
      points: [50, 500, 2000, 5000],
    },
    {
      id: 3,
      text: "Какъв вид бихте предпочели?",
      options: [
        "Удрящи/ритащи",
        "Задържащи",
        "Заключващи/контролиращи",
      ],
      points: [10, 50, 50],
    },
    {
      id: 4,
      text: "За какво време бихте се занимавали?",
      options: ["3 месеца", "6 месеца", "1 година", "над 1 година"],
      points: [0, 0, 0, 0],
    },

    // Добавяне на въпроси
  ];

  const handleAnswer = (questionId, selectedAnswer) => {
    const points = questions[currentQuestion].points[selectedAnswer];

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
      <Link to="/home">
        <div>
          <button type="button" className={styles.back_button}>
            Назад
          </button>
        </div>
      </Link>
      <div className={styles.container}>
        <div className={styles.questionnaire_container}>
          {currentQuestion < questions.length ? (
            <Question
              className={styles.link_button}
              id={questions[currentQuestion].id}
              text={questions[currentQuestion].text}
              options={questions[currentQuestion].options}
              onAnswer={handleAnswer}
            />
          ) : (
            <div className={styles.result_container}>
              <h2>Не успяхме да намерим подходящи предложения за Вас</h2>
              <Link className={styles.link_button} to={"/мartial аrts"}>
                Към всички предложения
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
