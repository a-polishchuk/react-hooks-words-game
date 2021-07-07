import { Styles } from 'src/types';

export const styles: Styles = {
  container: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto 200px',
  },
  mainArea: {
    gridColumn: 1,
    gridRow: 1,
    padding: 10,
  },
  bottomArea: {
    gridColumn: 1,
    gridRow: 2,
    padding: 10,
  },
};
