import React from 'react';
import { Wrapper, AnswerContainer } from './Answers.styles';

const Answer = ({ answers, questionId, handleUserAnswer }) => {
  const answersElements = answers.map((answer) => {
    return (
      <AnswerContainer
        key={answer.id}
        isHeld={answer.isHeld}
        className={answer.correct ? 'green' : ''}
        onClick={() => handleUserAnswer(answer.id, questionId)}
      >
        {answer.answer}{' '}
      </AnswerContainer>
    );
  });

  return <Wrapper>{answersElements}</Wrapper>;
};

export default Answer;
