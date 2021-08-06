import { useCallback, useEffect, useRef } from 'react';
import { ActionType, GameStatus } from 'src/types';
import { useElementRect } from 'src/hooks/useElementRect';
import { useInterval } from 'src/hooks/useInterval';
import { useGameContext } from 'src/components/GameContext';
import { fetchRandomWord } from 'src/services/words';
import Word from './Word';
import { styles } from './styles';

const SPAWN_DELAY = 2000;

function SpawnPool() {
  const [state, dispatch] = useGameContext();
  const { words, gameStatus } = state;
  const divRef = useRef<HTMLDivElement>(null);
  const spawnRect = useElementRect(divRef);

  const spawnWord = useCallback(() => {
    fetchRandomWord().then((randomWord) => {
      dispatch({
        type: ActionType.ADD_WORD,
        payload: randomWord,
      });
    });
  }, [dispatch]);

  const { isRunning, stop, restart } = useInterval(spawnWord, SPAWN_DELAY);

  useEffect(() => {
    const isPlaying = gameStatus === GameStatus.PLAYING;
    if (isPlaying && !isRunning) {
      restart();
    }
    if (!isPlaying && isRunning) {
      stop();
    }
  }, [gameStatus, isRunning, restart, stop]);

  const handleWordTimeout = useCallback(
    (wordId: string) => {
      dispatch({
        type: ActionType.EXPIRE_WORD,
        payload: wordId,
      });
    },
    [dispatch]
  );

  return (
    <div ref={divRef} style={styles.root}>
      {words.map((word) => (
        <Word
          key={word.id}
          wordData={word}
          parentRect={spawnRect}
          onTimeout={handleWordTimeout}
        />
      ))}
    </div>
  );
}

export default SpawnPool;
