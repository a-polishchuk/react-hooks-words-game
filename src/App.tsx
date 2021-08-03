import { useCallback, useEffect, useState } from 'react';
import { GameStatus, WordData } from 'src/types';
import { useInterval } from 'src/hooks/useInterval';
import { fetchRandomWord } from 'src/services/words';
import MainLayout from 'src/components/MainLayout';
import SpawnPool from 'src/components/SpawnPool';
import InputBar from 'src/components/InputBar';
import TopBar from 'src/components/TopBar';
import Score from 'src/components/Score';
import LastWord from 'src/components/LastWord';
import Button from 'src/components/common/Button';
import Menu from 'src/components/Menu';

const SPAWN_DELAY = 2000;

function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.IDLE);
  const [words, setWords] = useState<WordData[]>([]);
  const [score, setScore] = useState<number>(0);
  const [lastWord, setLastWord] = useState<string>('');
  const [lastPoints, setLastPoints] = useState<number>(0);

  const spawnWord = useCallback(() => {
    fetchRandomWord().then((randomWord) => {
      setWords((array) => [...array, randomWord]);
    });
  }, []);

  const { isRunning, stop, restart } = useInterval(spawnWord, SPAWN_DELAY);

  useEffect(() => {
    if (gameStatus === GameStatus.PLAYING && !isRunning) {
      restart();
    }
    if (gameStatus === GameStatus.PAUSED && isRunning) {
      stop();
    }
  }, [gameStatus, isRunning, restart, stop]);

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

  const handleMenuClick = () => {
    if (gameStatus === GameStatus.PLAYING) {
      setGameStatus(GameStatus.PAUSED);
    } else {
      setGameStatus(GameStatus.PLAYING);
    }
  };

  return (
    <>
      <Menu
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        score={score}
      />
      <MainLayout
        topArea={
          <TopBar>
            <Button text="Menu" onClick={handleMenuClick} />
            <Score score={score} />
            <LastWord word={lastWord} points={lastPoints} />
          </TopBar>
        }
        mainArea="Main area"
        // mainArea={<SpawnPool words={words} onWordTimeout={handleWordTimeout} />}
        bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
      />
    </>
  );
}

export default App;
