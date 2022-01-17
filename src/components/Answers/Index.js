import React, { useState } from 'react';
import { Wrapper, AnswerContainer } from './Answers.styles';

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
    <Wrapper>
      {answers.map((answer) => {
        return (
          <AnswerContainer className={answer.correct ? 'green' : ''}>
            {answer.answer}{' '}
          </AnswerContainer>
        );
      })}
    </Wrapper>
  );
};

export default Answer;
