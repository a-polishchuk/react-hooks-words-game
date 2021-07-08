import { useCallback, useState, useRef } from 'react';
import MainLayout from 'src/components/MainLayout';
import InputBar from 'src/components/InputBar';
import Word from 'src/components/Word';
import { WordData } from 'src/types';
import { generateWordData } from 'src/dictionary';
import { useElementRect } from './hooks/useElementRect';

function App() {
  const spawnRef = useRef<HTMLDivElement>(null);
  const spawnRect = useElementRect(spawnRef);
  const [wordData, setWordData] = useState<WordData>(() =>
    generateWordData(400, 400)
  );

  const handleWordSubmit = useCallback((newWord: string) => {
    console.log(`new word: ${newWord}`);
  }, []);

  const handleTimeout = (wordId: string) => {
    setWordData(generateWordData(spawnRect!.width, spawnRect!.height));
  };

  return (
    <MainLayout
      mainArea={
        <div
          ref={spawnRef}
          style={{
            border: '2px dashed #BBBBBB',
            position: 'relative',
            height: '100%',
          }}
        >
          <div>
            {spawnRect?.width} x {spawnRect?.height}
          </div>
          <Word
            key={wordData.id}
            wordData={wordData}
            parentRect={spawnRect}
            onTimeout={handleTimeout}
          />
        </div>
      }
      bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
    />
  );
}

export default App;
