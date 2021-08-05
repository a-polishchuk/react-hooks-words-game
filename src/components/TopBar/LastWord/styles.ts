import { Styles } from 'src/types';
import { globalStyles } from 'src/components/globalStyles';

export const styles: Styles = {
  root: {
    ...globalStyles.bar,
    flex: 3,
    height: '100%',
    fontSize: 24,
  },
};
