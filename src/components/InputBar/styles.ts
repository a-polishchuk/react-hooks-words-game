import { Styles } from 'src/types';
import { globalStyles } from 'src/components/globalStyles';

export const styles: Styles = {
  root: {
    ...globalStyles.bar,
    height: '100%',
    fontSize: 128,
    justifyContent: 'center',
  },
};
