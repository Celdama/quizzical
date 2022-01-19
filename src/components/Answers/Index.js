import React from 'react';
import { Wrapper, AnswerContainer } from './Answers.styles';

const Answer = ({
  answers,
  questionId,
  handleUserAnswer,
  answersIsChecked,
}) => {
  const setupClassName = (element) => {
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
    const { id, isHeld } = answer;
    return (
      <AnswerContainer
        key={id}
        isHeld={isHeld}
        className={answersIsChecked ? setupClassName(answer) : ''}
        onClick={() => handleUserAnswer(id, questionId)}
      >
        {answer.answer}{' '}
      </AnswerContainer>
    );
  });

  return <Wrapper>{answersElements}</Wrapper>;
};

export default Answer;
