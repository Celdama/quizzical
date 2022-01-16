import { useState } from 'react';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div className='App'>
      {startQuiz ? (
        <h1>Quizzz</h1>
      ) : (
        <div>
          <h1>Quizzical</h1>
          <p>Some description</p>
          <button onClick={handleStartQuiz}>Start quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
