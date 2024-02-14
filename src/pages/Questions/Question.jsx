import React, { useState } from 'react';
import styles from './Questions.module.css';

const Question = ({ id, text, options, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleOptionClick = (optionIndex) => {
      setSelectedAnswer(optionIndex);
      onAnswer(id, optionIndex);
    };
  
    return (
      <div className={styles.question_container}>
        <h3 className={styles.question_title}>{text}</h3>
          <ul className={styles.option_list}>
            {options.map((option, index) => (
              <li
                className={styles.questions}
                key={index}
                style={{ textDecoration: selectedAnswer === index }}
                onClick={() => handleOptionClick(index)}
              >
            {option}
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default Question;