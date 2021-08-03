import { useCallback, useEffect, useReducer } from 'react';
import { ActionType, GameStatus, INITIAL_STATE } from 'src/types';
import { useInterval } from 'src/hooks/useInterval';
import { fetchRandomWord } from 'src/services/words';
import { reducer } from './reducer';
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
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { gameStatus, words, score, lastWord, lastPoints } = state;

  const spawnWord = useCallback(() => {
    fetchRandomWord().then((randomWord) => {
      dispatch({
        type: ActionType.ADD_WORD,
        payload: randomWord,
      });
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

  const handleWordSubmit = useCallback((typedWord: string) => {
    dispatch({
      type: ActionType.SUBMIT_WORD,
      payload: typedWord,
    });
  }, []);

  const handleWordTimeout = (wordId: string) => {
    dispatch({
      type: ActionType.EXPIRE_WORD,
      payload: wordId,
    });
  };

  const setGameStatus = (newGameStatus: GameStatus) => {
    dispatch({
      type: ActionType.SET_GAME_STATUS,
      payload: newGameStatus,
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
        mainArea={<SpawnPool words={words} onWordTimeout={handleWordTimeout} />}
        bottomArea={<InputBar onWordSubmit={handleWordSubmit} />}
      />
    </>
  );
}

export default App;
