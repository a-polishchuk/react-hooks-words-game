import { styles } from './styles';

interface Props {
  score: number;
}

function ScoreBar({ score }: Props) {
  return (
    <div style={styles.root}>
      Score: <strong style={styles.score}>{score}</strong>
    </div>
  );
}

export default ScoreBar;
