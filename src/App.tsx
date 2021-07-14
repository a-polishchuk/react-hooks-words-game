import { useCallback, useEffect, useState } from 'react';
import { WordData } from 'src/types';
import { generateWordData } from 'src/dictionary';
import { useInterval } from 'src/hooks/useInterval';
import MainLayout from 'src/components/MainLayout';
import SpawnPool from 'src/components/SpawnPool';
import InputBar from 'src/components/InputBar';
import ScoreBar from 'src/components/ScoreBar';
import { fetchRandomWord } from 'src/services/words';

const SPAWN_DELAY = 2000;

function App() {
  const [words, setWords] = useState<WordData[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    fetchRandomWord().then((word) => {
      console.log(word);
    });
  }, []);

  const spawnWord = useCallback(() => {
    setWords((array) => [...array, generateWordData()]);
  }, []);

  useInterval(spawnWord, SPAWN_DELAY);

  const handleWordSubmit = useCallback(
    (typedWord: string) => {
      const matchedWords = words.filter((w) => w.word === typedWord);
      const points = matchedWords.map((w) => w.complexity);
      const sum = points.reduce((prev, current) => prev + current, 0);
      setScore((value) => value + sum);

      setWords((array) => {
        return array.filter((w) => w.word !== typedWord);
      });
    },
    [words]
  );

  const handleWordTimeout = (wordId: string) => {
    setWords((array) => {
      return array.filter((w) => w.id !== wordId);
    });
  };

  return (
    <MainLayout
      topArea={<ScoreBar score={score} />}
      mainArea={<SpawnPool words={words} onWordTimeout={handleWordTimeout} />}
      bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
    />
  );
}

export default App;
