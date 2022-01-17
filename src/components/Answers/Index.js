import React, { useState } from 'react';

const Answer = ({ correctAnswer, incorrectAnswers }) => {
  const [answers, setAnswers] = useState(mergeAnswers() || 0);

  function mergeAnswers() {
    const merged = [];
    merged.push({
      correct: true,
      answer: correctAnswer,
    });

    incorrectAnswers.forEach((incorrectAnswer) => {
      merged.push({
        correct: false,
        answer: incorrectAnswer,
      });
    });

    return merged.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      {answers.map((answer) => {
        return (
          <span className={answer.correct ? 'green' : ''}>
            {answer.answer}{' '}
          </span>
        );
      })}
    </div>
  );
};

export default Answer;
