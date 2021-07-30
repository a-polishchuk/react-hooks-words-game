import { styles } from './styles';

interface Props {
  word: string;
  points: number;
}

function LastWord({ word, points }: Props) {
  return (
    <div style={styles.root}>
      Last word:&nbsp;
      {word && (
        <b>
          {word} ({points} points)
        </b>
      )}
    </div>
  );
}

export default LastWord;
