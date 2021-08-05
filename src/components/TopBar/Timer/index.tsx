import { useCallback, useEffect, useState } from 'react';
import { ActionType, GameStatus } from 'src/types';
import { useInterval } from 'src/hooks/useInterval';
import { useGameContext } from 'src/components/GameContext';
import { formatTime } from 'src/utils';
import { getStyle } from './styles';

const ONE_SECOND = 1000;
const DANGER_TIME = 10 * ONE_SECOND;

function Timer() {
  const [state, dispatch] = useGameContext();
  const { gameStatus, timeLeft, playTime } = state;
  const [currentTimeLeft, setCurrentTimeLeft] = useState<number>(timeLeft);
  const isPlaying = gameStatus === GameStatus.PLAYING;
  const showDanger = currentTimeLeft < DANGER_TIME;

  useEffect(() => {
    setCurrentTimeLeft(timeLeft);
  }, [timeLeft]);

  const { isRunning, stop, restart } = useInterval(
    useCallback(() => {
      setCurrentTimeLeft((value) => value - ONE_SECOND);
    }, []),
    ONE_SECOND
  );

  useEffect(() => {
    if (!isPlaying && isRunning) {
      stop();
    }
    if (isPlaying && !isRunning) {
      restart();
    }
  }, [isPlaying, isRunning, restart, stop]);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const timeoutId = setTimeout(() => {
      dispatch({
        type: ActionType.GAME_OVER,
      });
    }, timeLeft);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, playTime, timeLeft, dispatch]);

  return <div style={getStyle(showDanger)}>{formatTime(currentTimeLeft)}</div>;
}

export default Timer;
