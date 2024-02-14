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
      text: "Каква е причината да искате да тренирате?",
      options: [
        "За самозащита",
        "За здраве и увереност",
        "За да се състезавам",
        "За понижаване на стреса",
      ],
      points: [30, 1, 100, 1000],
    },
    {
      id: 2,
      text: "Какъв вид бихте предпочели?",
      options: ["Удрящи/ритащи", "Задържащи", "Заключващи/контролиращи", "Със оръжие"],
      points: [50, 20, 10, 500],
    },
    {
      id: 3,
      text: "Каква интензивност на тренировката предпочитате?",
      options: ["Малка", "Средна", "Изморителна"],
      points: [20, 10, 50],
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

      if (totalScore >= 150 && totalScore < 300) {
        navigate("/filter1");
      } 
      else if (totalScore > 32 && totalScore < 52 )  {
        navigate("/filter2");
      }
      else if (totalScore > 32 && totalScore < 52 )  {
        navigate("/filter2");
      }
    }
  }, [currentQuestion, totalScore, navigate, questions.length]);

  return (
    <div className={styles.main_container}>
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
              <h2>Не успчхме да намерим подходящи предложения за Вас</h2>
              <Link
                className={styles.link_button}
                to={"/мartial аrts"}
              >
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
