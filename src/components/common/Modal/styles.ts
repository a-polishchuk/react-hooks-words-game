import { Styles } from 'src/types';
import { globalStyles } from 'src/components/globalStyles';

export const styles: Styles = {
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000088',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    ...globalStyles.bar,
    justifyContent: 'center',
    boxShadow: '7px 7px 0px 0px #00000088',
    maxWidth: '60%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
};
