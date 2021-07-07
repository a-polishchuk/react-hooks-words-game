import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { WordData } from 'src/types';

interface Props {
  wordData: WordData;
  onTimeout: (wordId: string) => void;
}

function Word({ wordData, onTimeout }: Props) {
  const { id, word, left, top, timeToLive } = wordData;
  const [opacity, setOpacity] = useState<number>(1);

  const style: CSSProperties = useMemo(
    () => ({
      position: 'absolute',
      left,
      top,
      fontSize: 14,
      opacity,
      transition: 'all linear 2s',
    }),
    [left, top, opacity]
  );

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
