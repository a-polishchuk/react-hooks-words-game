import { useCallback, useState } from 'react';
import { useEventListener } from 'src/hooks/useEventListener';
import { useGameContext } from 'src/components/GameContext';
import { ActionType } from 'src/types';
import { isLetter } from 'src/utils';
import { styles } from './styles';

function InputBar() {
  const [, dispatch] = useGameContext();
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
            dispatch({
              type: ActionType.SUBMIT_WORD,
              payload: word,
            });
            setWord('');
            break;
          default:
            if (isLetter(key)) {
              setWord((value) => value + key);
            }
            break;
        }
      },
      [dispatch, word]
    )
  );

  return <div style={styles.root}>{word}</div>;
}

export default InputBar;
