import { useEffect, useState } from 'react';
import { WordData } from 'src/types';
import { useStyle } from './styles';

interface Props {
  wordData: WordData;
  parentRect: DOMRect | undefined;
  onTimeout: (wordId: string) => void;
}

function Word({ wordData, parentRect, onTimeout }: Props) {
  const { id, word, timeToLive, complexity } = wordData;
  const [opacity, setOpacity] = useState<number>(1);
  const style = useStyle(opacity, complexity, parentRect!);

  useEffect(() => {
    setTimeout(() => setOpacity(0), timeToLive);
  }, [timeToLive]);

  const handleTransitionEnd = () => {
    onTimeout(id);
  };

  return (
    <div style={style} onTransitionEnd={handleTransitionEnd}>
      {word}
    </div>
  );
}

export default Word;
