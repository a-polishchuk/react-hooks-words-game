import { ReactNode, MouseEvent } from 'react';
import Portal from 'src/components/common/Portal';
import { styles } from './styles';

interface Props {
  children: ReactNode;
  onBackClicked?: () => void;
}

function Modal({ children, onBackClicked }: Props) {
  const handleBackClick = () => {
    onBackClicked?.();
  };

  const handleBodyClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <div style={styles.root} onClick={handleBackClick}>
        <div style={styles.body} onClick={handleBodyClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
