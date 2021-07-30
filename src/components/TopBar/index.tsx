import { ReactNode } from 'react';
import { styles } from './styles';

interface Props {
  children: ReactNode;
}

function TopBar({ children }: Props) {
  return <div style={styles.root}>{children}</div>;
}

export default TopBar;
