import React, { useState } from 'react';
import styles from './Questions.module.css';

export default function Question({ id, text, options, onAnswer }: {id: number, text: string, options: {option: string, points: number}[], onAnswer: (id: number, optionsIndex: number) => void}) { // TODO: TYPE
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
    const handleOptionClick = (optionIndex: number) => {
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
                style={{ textDecoration: selectedAnswer === index ? "none" : undefined }}
                onClick={() => handleOptionClick(index)}
              >
            {option.option}
              </li>
            ))}
        </ul>
      </div>
    );
  };
