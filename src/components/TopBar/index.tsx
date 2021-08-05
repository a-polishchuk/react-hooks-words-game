import { ActionType } from 'src/types';
import { useGameContext } from 'src/components/GameContext';
import RowLayout from 'src/components/common/RowLayout';
import Button from 'src/components/common/Button';
import Score from './Score';
import LastWord from './LastWord';
import Timer from './Timer';

function TopBar() {
  const [, dispatch] = useGameContext();

  const handleMenuClick = () => {
    dispatch({
      type: ActionType.PAUSE,
    });
  };

  return (
    <RowLayout>
      <Button text="Menu" onClick={handleMenuClick} />
      <Score />
      <LastWord />
      <Timer />
    </RowLayout>
  );
}

export default TopBar;
