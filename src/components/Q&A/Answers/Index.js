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

    return merged;
  }

  return (
    <div>
      {answers.map((answer) => {
        return <p className={answer.correct ? 'green' : ''}>{answer.answer}</p>;
      })}
    </div>
  );
};

export default Answer;
