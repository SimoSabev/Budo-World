import React from 'react';
import styles from './Questions.module.css';
import {IQuestion} from "../../Models/Question";

export default function Question({ currentQuestion, onAnswer }: {currentQuestion: IQuestion, onAnswer: (optionsIndex: string[]) => void}) { // TODO: TYPE
  
    const handleOptionClick = (optionIndex: number) => {
      onAnswer(currentQuestion.options[optionIndex].resultType);
    };
  
    return (
      <div className={styles.question_container}>
        <h3 className={styles.question_title}>{currentQuestion.question}</h3>
          <ul className={styles.option_list}>
            {currentQuestion.options.map((option, index) => (
              <li
                className={styles.questions}
                key={index}
                onClick={() => handleOptionClick(index)}
              >
            {option.option}
              </li>
            ))}
        </ul>
      </div>
    );
  };
