import React, { useState, useEffect } from 'react';
import Answer from '../Answers/Index';
import { Wrapper, Content, ContentResult, Btn } from './Q&A.styles';
import { nanoid } from 'nanoid';

const QAndA = () => {
  const [questions, setQuestions] = useState([]);
  const [reloadGame, setReloadGame] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answersIsChecked, setAnswersIsChecked] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=18')
      .then((res) => res.json())
      .then((data) => setUpData(data.results));
  }, [reloadGame]);

  function setUpData(data) {
    const settingQuestion = [];
    data.forEach((question, i) => {
      settingQuestion.push({
        questionId: nanoid(),
        question: question.question,
        answers: mergeAnswers(
          question.correct_answer,
          question.incorrect_answers
        ),
      });
    });

    setQuestions(settingQuestion);
  }

  function mergeAnswers(correct, incorrect) {
    const merged = [];
    merged.push({
      id: nanoid(),
      correct: true,
      answer: correct,
      isHeld: false,
      isHeldAndIsCorrect: false,
      isHeldAndIsIncorrect: false,
      isJustCorrectAfterCheck: false,
    });

    incorrect.forEach((incorrectAnswer) => {
      merged.push({
        id: nanoid(),
        correct: false,
        answer: incorrectAnswer,
        isHeld: false,
        isHeldAndIsCorrectAfterCheck: false,
        isHeldAndIsIncorrect: false,
        isJustCorrectAfterCheck: false,
      });
    });

    return merged.sort(() => Math.random() - 0.5);
  }

  function handleUserAnswer(answerId, questionId) {
    const questionIndex = questions.findIndex(
      (element) => element.questionId === questionId
    );

    let newArray = [...questions];
    newArray[questionIndex].answers.forEach((answer) => {
      if (answer.id === answerId) {
        answer.isHeld = !answer.isHeld;
      } else {
        answer.isHeld = false;
      }
    });

    setQuestions(newArray);
  }

  const handleCheckAnswers = () => {
    let newArray = [...questions];
    newArray.forEach((element) => {
      element.answers.forEach((answer) => {
        if (answer.correct & answer.isHeld) {
          answer.isHeldAndIsCorrectAfterCheck = true;
          setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
        } else if (answer.correct) {
          answer.isJustCorrectAfterCheck = true;
        } else if (!answer.correct && answer.isHeld) {
          answer.isHeldAndIsIncorrect = true;
        }
      });
    });

    setAnswersIsChecked(true);
    setQuestions(newArray);
  };

  const questionsElements = questions.map((question, i) => {
    return (
      <Content key={question.questionId}>
        <p className='question'>{question.question}</p>
        <Answer
          answersIsChecked={answersIsChecked}
          className='aswer'
          questionId={question.questionId}
          handleUserAnswer={handleUserAnswer}
          answers={question.answers}
        />
      </Content>
    );
  });

  const playAgain = () => {
    setReloadGame((prevReload) => prevReload + 1);
    setAnswersIsChecked(false);
    setCorrectAnswers(0);
  };

  return (
    <Wrapper>
      {questionsElements}
      {!answersIsChecked ? (
        <Btn onClick={handleCheckAnswers}>Check Answers</Btn>
      ) : (
        <ContentResult>
          <p>You scored {correctAnswers}/5 correct answers</p>
          <Btn onClick={playAgain}>Play again</Btn>
        </ContentResult>
      )}
    </Wrapper>
  );
};

export default QAndA;
