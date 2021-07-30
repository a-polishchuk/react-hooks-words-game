import { useCallback, useState } from 'react';
import { WordData } from 'src/types';
import { useInterval } from 'src/hooks/useInterval';
import MainLayout from 'src/components/MainLayout';
import SpawnPool from 'src/components/SpawnPool';
import InputBar from 'src/components/InputBar';
import TopBar from 'src/components/TopBar';
import Score from 'src/components/Score';
import LastWord from 'src/components/LastWord';
import { fetchRandomWord } from 'src/services/words';

const SPAWN_DELAY = 2000;

function App() {
  const [words, setWords] = useState<WordData[]>([]);
  const [score, setScore] = useState<number>(0);
  const [lastWord, setLastWord] = useState<string>('');
  const [lastPoints, setLastPoints] = useState<number>(0);

  const spawnWord = useCallback(() => {
    fetchRandomWord().then((randomWord) => {
      setWords((array) => [...array, randomWord]);
    });
  }, []);

  useInterval(spawnWord, SPAWN_DELAY);

  const handleWordSubmit = useCallback(
    (typedWord: string) => {
      const matchedWords = words.filter((w) => w.word === typedWord);
      if (matchedWords.length === 0) {
        return;
      }

      const points = matchedWords.map((w) => w.complexity);
      const sum = points.reduce((prev, current) => prev + current, 0);
      setScore((value) => value + sum);

      setWords((array) => {
        return array.filter((w) => w.word !== typedWord);
      });

      setLastWord(typedWord);
      setLastPoints(sum);
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
      topArea={
        <TopBar>
          <Score score={score} />
          <div style={{ width: 10 }} />
          <LastWord word={lastWord} points={lastPoints} />
        </TopBar>
      }
      mainArea={<SpawnPool words={words} onWordTimeout={handleWordTimeout} />}
      bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
    />
  );
}

export default App;
