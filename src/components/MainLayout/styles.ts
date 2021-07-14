import { Styles } from 'src/types';

export const styles: Styles = {
  container: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '64px auto 200px',
  },
  topArea: {
    gridColumn: 1,
    gridRow: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  mainArea: {
    gridColumn: 1,
    gridRow: 2,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  bottomArea: {
    gridColumn: 1,
    gridRow: 3,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
  },
};
