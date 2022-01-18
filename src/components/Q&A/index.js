import React, { useState, useEffect } from 'react';
import Answer from '../Answers/Index';
import { Wrapper, Content } from './Q&A.styles';
import { nanoid } from 'nanoid';

const QAndA = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=18')
      .then((res) => res.json())
      .then((data) => setUpData(data.results));
  }, []);

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
    });

    incorrect.forEach((incorrectAnswer) => {
      merged.push({
        id: nanoid(),
        correct: false,
        answer: incorrectAnswer,
        isHeld: false,
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

  const questionsElements = questions.map((question, i) => {
    return (
      <Content key={question.questionId}>
        <p className='question'>{question.question}</p>
        <Answer
          className='aswer'
          questionId={question.questionId}
          handleUserAnswer={handleUserAnswer}
          answers={question.answers}
        />
      </Content>
    );
  });

  return (
    <Wrapper>
      {questionsElements}
      <button>Check Answers</button>
    </Wrapper>
  );
};

export default QAndA;
