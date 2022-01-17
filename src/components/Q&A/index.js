import React, { useState, useEffect } from 'react';
import Answer from '../Answers/Index';

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
      <div>
        <p key={index}>{question.question}</p>
        <Answer
          correctAnswer={question.correctAnswer}
          incorrectAnswers={question.incorrectAnswers}
        />
      </div>
    );
  });

  return <div>{questionsElements}</div>;
};

export default QAndA;
