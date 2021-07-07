import { useCallback, useState } from 'react';
import { useEventListener } from 'src/hooks/useEventListener';
import { isLetter } from 'src/utils';
import { styles } from './styles';

interface Props {
  onWordSubmit: (word: string) => void;
}

function InputBar({ onWordSubmit }: Props) {
  const [word, setWord] = useState<string>('');

  useEventListener<KeyboardEvent>(
    'keydown',
    useCallback(
      (event: KeyboardEvent) => {
        const { key } = event;
        switch (key) {
          case 'Backspace':
            setWord((value) => value.substr(0, value.length - 1));
            break;
          case 'Enter':
            onWordSubmit(word);
            setWord('');
            break;
          default:
            if (isLetter(key)) {
              setWord((value) => value + key);
            }
            break;
        }
      },
      [onWordSubmit, word]
    )
  );

  return <div style={styles.root}>{word}</div>;
}

export default InputBar;
