import QAndA from './components/Q&A';
import Blob from './components/Blob';
import { useState } from 'react';
import { Wrapper, TitleApp, StartBtn } from './App.styles';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <Wrapper>
      {startQuiz ? (
        <Blob blueRight={86} blueTop={86} yellowRight={-25} yellowTop={-20}>
          <QAndA />
        </Blob>
      ) : (
        <div className='start-quiz'>
          <Blob blueRight={78} blueTop={80} yellowRight={-25} yellowTop={-10}>
            <TitleApp>Quizzical</TitleApp>
            <p>Ready to start a computer quiz ?</p>
            <StartBtn onClick={handleStartQuiz}>Start quiz</StartBtn>
          </Blob>
        </div>
      )}
    </Wrapper>
  );
}

export default App;
