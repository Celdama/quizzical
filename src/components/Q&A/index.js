import React, { useState, useEffect } from 'react';
import Answer from '../Answers/Index';
import { Wrapper, Content } from './Q&A.styles';

const QAndA = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=18')
      .then((res) => res.json())
      .then((data) => setUpData(data.results));
  }, []);

  function setUpData(data) {
    const settingQuestion = [];
    data.forEach((question) => {
      settingQuestion.push({
        question: question.question,
        correctAnswer: question.correct_answer,
        incorrectAnswers: question.incorrect_answers,
      });
    });
    setQuestions(settingQuestion);
  }

  const questionsElements = questions.map((question, index) => {
    return (
      <Content>
        <p className='question' key={index}>
          {question.question}
        </p>
        <Answer
          className='answer'
          correctAnswer={question.correctAnswer}
          incorrectAnswers={question.incorrectAnswers}
        />
        <hr />
      </Content>
    );
  });

  return <Wrapper>{questionsElements}</Wrapper>;
};

export default QAndA;
