import QAndA from './components/Q&A';
import { useState } from 'react';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div className='App'>
      {startQuiz ? (
        <QAndA />
      ) : (
        <div className='start-quiz'>
          <div className='content'>
            <div className='yellow-blob'></div>
            <div className='blue-blob'></div>
            <h1>Quizzical</h1>
            <p>Ready to start a computer quiz ?</p>
            <button onClick={handleStartQuiz}>Start quiz</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
