import { GameStatus } from 'src/types';
import Dialog from 'src/components/common/Dialog';

interface Props {
  gameStatus: GameStatus;
  setGameStatus: (newValue: GameStatus) => void;
  score: number;
}

function MenuModal({ gameStatus, setGameStatus, score }: Props) {
  const playGame = () => {
    setGameStatus(GameStatus.PLAYING);
  };

  const finishGame = () => {
    setGameStatus(GameStatus.FINISHED);
  };

  const playAgain = () => {
    // TODO: we need to clear the app state
    setGameStatus(GameStatus.PLAYING);
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
          message={`Your score is ${score} points. ${getScoreMessage(score)}`}
          okText="One more time"
          onOk={playAgain}
        />
      );
    default:
      return null;
  }
}

function getScoreMessage(score: number) {
  if (score < 100) {
    return 'You can do better!';
  }
  if (score < 200) {
    return 'Not bad, not bad...';
  }
  return 'Great job, nicely done!';
}

export default MenuModal;
