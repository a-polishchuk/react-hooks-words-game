import { useEffect } from 'react';
import { ActionType, GameStatus } from 'src/types';
import { useGameContext } from 'src/components/GameContext';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { usePrevious } from 'src/hooks/usePrevious';
import Dialog from 'src/components/common/Dialog';

function MenuDialog() {
  const [state, dispatch] = useGameContext();
  const { gameStatus, score } = state;
  const [highScore, setHighScore] = useLocalStorage<number>('high-score', 0);
  const [prevHighScore, setPrevHighScore] = usePrevious<number>(highScore);

  useEffect(() => {
    if (gameStatus !== GameStatus.FINISHED && score > highScore) {
      setHighScore(score);
    }
  }, [gameStatus, highScore, score, setHighScore]);

  const playGame = () => {
    dispatch({
      type: ActionType.PLAY,
    });
  };

  const finishGame = () => {
    dispatch({
      type: ActionType.GAME_OVER,
    });
  };

  const playAgain = () => {
    setPrevHighScore(highScore);
    dispatch({
      type: ActionType.PLAY_AGAIN,
    });
  };

  switch (gameStatus) {
    case GameStatus.IDLE:
      return (
        <Dialog
          title="Welcome to the Words Game!"
          message="Type English words and earn points. Beat the high score!"
          okText="Let's go!"
          onOk={playGame}
        />
      );
    case GameStatus.PAUSED:
      return (
        <Dialog
          title="Game paused"
          okText="Resume"
          onOk={playGame}
          cancelText="Finish"
          onCancel={finishGame}
        />
      );
    case GameStatus.FINISHED:
      return (
        <Dialog
          title="Game over"
          message={getScoreMessage(score, prevHighScore)}
          okText="One more time"
          onOk={playAgain}
        />
      );
    default:
      return null;
  }
}

function getScoreMessage(score: number, prevHighScore: number) {
  const youScored = `You scored ${score} points.\n`;
  if (score > prevHighScore) {
    return youScored + 'This is new High Score!';
  }
  if (score < 100) {
    return youScored + 'You can do better!';
  }
  if (score < 200) {
    return youScored + 'Not bad, not bad...';
  }
  return youScored + 'Great job, nicely done!';
}

export default MenuDialog;
