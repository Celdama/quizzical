import React, { useState, useEffect } from 'react';

const QAndA = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=18')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  console.table(questions);

  return <div>question answer</div>;
};

export default QAndA;
