import { useEffect, useState } from 'react';
import { useGameContext } from 'src/components/GameContext';
import { PALETTE } from 'src/constants';
import { getRandomElement } from 'src/utils';
import ScoreCounter from './ScoreCounter';
import { styles } from './styles';

function ScoreBar() {
  const [{ score }] = useGameContext();
  const [color, setColor] = useState<string>(PALETTE[0]);

  useEffect(() => {
    setColor(getRandomElement(PALETTE));
  }, [score]);

  const style = {
    ...styles.root,
    color,
  };

  return (
    <div style={style}>
      Score: <ScoreCounter score={score} style={styles.score} />
    </div>
  );
}

export default ScoreBar;
