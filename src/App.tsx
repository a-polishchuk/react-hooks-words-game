import { useCallback, useState } from 'react';
import MainLayout from 'src/components/MainLayout';
import InputBar from 'src/components/InputBar';
import Word from 'src/components/Word';
import { WordData } from 'src/types';
import { generateWordData } from 'src/dictionary';

function App() {
  const [wordData, setWordData] = useState<WordData>(() =>
    generateWordData(400, 400)
  );

  const handleWordSubmit = useCallback((newWord: string) => {
    console.log(`new word: ${newWord}`);
  }, []);

  const handleTimeout = (wordId: string) => {
    setWordData(generateWordData(400, 400));
  };

  return (
    <MainLayout
      mainArea={
        <div>
          <Word
            key={wordData.id}
            wordData={wordData}
            onTimeout={handleTimeout}
          />
        </div>
      }
      bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
    />
  );
}

export default App;
