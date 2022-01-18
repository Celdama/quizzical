import React, { useState } from 'react';
import { Wrapper, AnswerContainer } from './Answers.styles';
import { nanoid } from 'nanoid';

const Answer = ({ correctAnswer, incorrectAnswers }) => {
  const [answers, setAnswers] = useState(mergeAnswers());

  function mergeAnswers() {
    const merged = [];
    merged.push({
      id: nanoid(),
      correct: true,
      answer: correctAnswer,
      isHeld: false,
    });

    incorrectAnswers.forEach((incorrectAnswer) => {
      merged.push({
        id: nanoid(),
        correct: false,
        answer: incorrectAnswer,
        isHeld: false,
      });
    });

    return merged.sort(() => Math.random() - 0.5);
  }

  const handleUserAnswer = (id) => {
    setAnswers((oldAnswers) =>
      oldAnswers.map((answer) => {
        return answer.id === id
          ? { ...answer, isHeld: !answer.isHeld }
          : { ...answer, isHeld: false };
      })
    );
  };
  console.log(answers);

  const answersElements = answers.map((answer) => {
    return (
      <AnswerContainer
        key={answer.id}
        className={answer.correct ? 'green' : ''}
        onClick={() => handleUserAnswer(answer.id)}
        isHeld={answer.isHeld}
      >
        {answer.answer}{' '}
      </AnswerContainer>
    );
  });

  return <Wrapper>{answersElements}</Wrapper>;
};

export default Answer;
