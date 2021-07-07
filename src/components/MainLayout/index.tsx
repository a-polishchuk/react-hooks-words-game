import { ReactNode } from 'react';
import { styles } from './styles';

interface Props {
  mainArea: ReactNode;
  bottomArea: ReactNode;
}

function MainLayout({ mainArea, bottomArea }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.mainArea}>{mainArea}</div>
      <div style={styles.bottomArea}>{bottomArea}</div>
    </div>
  );
}

export default MainLayout;
