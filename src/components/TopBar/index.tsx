import { ActionType, GameStatus } from 'src/types';
import { useGameContext } from 'src/components/GameContext';
import RowLayout from 'src/components/common/RowLayout';
import Button from 'src/components/common/Button';
import Score from './Score';
import LastWord from './LastWord';

function TopBar() {
  const [state, dispatch] = useGameContext();
  const { score, lastWord, lastPoints } = state;

  const handleMenuClick = () => {
    dispatch({
      type: ActionType.SET_GAME_STATUS,
      payload: GameStatus.PAUSED,
    });
  };

  return (
    <RowLayout>
      <Button text="Menu" onClick={handleMenuClick} />
      <Score score={score} />
      <LastWord word={lastWord} points={lastPoints} />
    </RowLayout>
  );
}

export default TopBar;
