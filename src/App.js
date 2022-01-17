import QAndA from './components/Q&A';
import Blob from './components/Blob';
import { useState } from 'react';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div className='App'>
      {startQuiz ? (
        <Blob blueRight={86} blueTop={86} yellowRight={-35} yellowTop={-20}>
          <QAndA />
        </Blob>
      ) : (
        <div className='start-quiz'>
          <Blob blueRight={78} blueTop={80} yellowRight={-25} yellowTop={-10}>
            <h1>Quizzical</h1>
            <p>Ready to start a computer quiz ?</p>
            <button onClick={handleStartQuiz}>Start quiz</button>
          </Blob>
        </div>
      )}
    </div>
  );
}

export default App;
