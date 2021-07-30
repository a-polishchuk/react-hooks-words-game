import { Styles } from 'src/types';
import { globalStyles } from 'src/components/globalStyles';

export const styles: Styles = {
  root: {
    ...globalStyles.bar,
    height: '100%',
    fontSize: 24,
    transition: 'all 1s linear',
  },
  score: {
    marginLeft: 10,
    fontWeight: 600,
  },
};
