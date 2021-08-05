import { useGameContext } from 'src/components/GameContext';
import { styles } from './styles';

function LastWord() {
  const [state] = useGameContext();
  const { lastWord, lastPoints } = state;

  return (
    <div style={styles.root}>
      Last word:&nbsp;
      {lastWord && (
        <b>
          {lastWord} ({lastPoints} points)
        </b>
      )}
    </div>
  );
}

export default LastWord;
