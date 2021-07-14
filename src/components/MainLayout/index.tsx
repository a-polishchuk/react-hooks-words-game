import { ReactNode } from 'react';
import { styles } from './styles';

interface Props {
  topArea: ReactNode;
  mainArea: ReactNode;
  bottomArea: ReactNode;
}

function MainLayout({ topArea, mainArea, bottomArea }: Props) {
  return (
    <div style={styles.container}>
      <div style={styles.topArea}>{topArea}</div>
      <div style={styles.mainArea}>{mainArea}</div>
      <div style={styles.bottomArea}>{bottomArea}</div>
    </div>
  );
}

export default MainLayout;
