import { useRef } from 'react';
import { WordData } from 'src/types';
import { useElementRect } from 'src/hooks/useElementRect';
import Word from 'src/components/Word';
import { styles } from './styles';

interface Props {
  words: WordData[];
  onWordTimeout: (wordId: string) => void;
}

function SpawnPool({ words, onWordTimeout }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const spawnRect = useElementRect(divRef);

  return (
    <div ref={divRef} style={styles.root}>
      {words.map((word) => (
        <Word
          key={word.id}
          wordData={word}
          parentRect={spawnRect}
          onTimeout={onWordTimeout}
        />
      ))}
    </div>
  );
}

export default SpawnPool;
