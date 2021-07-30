import { ReactElement } from 'react';
import Portal from 'src/components/common/Portal';
import { styles } from './styles';

interface Props {
  children: ReactElement;
}

function Modal({ children }: Props) {
  return (
    <Portal>
      <div style={styles.root}>
        <div style={styles.body}>{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
