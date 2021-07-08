import { useCallback, useEffect, useState } from 'react';
import { WordData } from 'src/types';
import { generateWordData } from 'src/dictionary';
import MainLayout from 'src/components/MainLayout';
import SpawnPool from 'src/components/SpawnPool';
import InputBar from 'src/components/InputBar';

const SPAWN_DELAY = 2000;

function App() {
  const [words, setWords] = useState<WordData[]>([]);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      setWords((array) => [...array, generateWordData()]);
    }, SPAWN_DELAY);

    return () => {
      clearInterval(intervalHandle);
    };
  }, []);

  const handleWordSubmit = useCallback((newWord: string) => {
    console.log(`new word: ${newWord}`);
  }, []);

  const handleWordTimeout = (wordId: string) => {
    setWords((array) => {
      return array.filter((w) => w.id !== wordId);
    });
  };

  return (
    <MainLayout
      mainArea={<SpawnPool words={words} onWordTimeout={handleWordTimeout} />}
      bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
    />
  );
}

export default App;
