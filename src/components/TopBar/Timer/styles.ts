import { CSSProperties } from 'react';
import { globalStyles } from 'src/components/globalStyles';

export function getStyle(danger: boolean): CSSProperties {
  return {
    ...globalStyles.bar,
    height: '100%',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: danger ? '#FF0000' : '#000000',
  };
}
