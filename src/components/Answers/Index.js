import React from 'react';
import { Wrapper, AnswerContainer } from './Answers.styles';

const Answer = ({
  answers,
  questionId,
  handleUserAnswer,
  answersIsChecked,
}) => {
  const setup = (element) => {
    if (
      element.isHeldAndIsCorrectAfterCheck ||
      element.isJustCorrectAfterCheck
    ) {
      return 'green';
    } else if (element.isHeldAndIsIncorrect) {
      return 'red';
    } else {
      return 'neither';
    }
  };

  const answersElements = answers.map((answer) => {
    return (
      <AnswerContainer
        key={answer.id}
        isHeld={answer.isHeld}
        className={answersIsChecked ? setup(answer) : ''}
        onClick={() => handleUserAnswer(answer.id, questionId)}
      >
        {answer.answer}{' '}
      </AnswerContainer>
    );
  });

  return <Wrapper>{answersElements}</Wrapper>;
};

export default Answer;
