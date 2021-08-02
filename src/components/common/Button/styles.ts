import { CSSProperties } from 'react';

export function getStyle(
  disabled: boolean,
  hovered: boolean,
  pressed: boolean
): CSSProperties {
  const borderStyle = hovered && !disabled ? 'solid' : 'dashed';
  const opacity = disabled ? 0.5 : 1;

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 600,
    border: `2px ${borderStyle} #BBBBBB`,
    transform: pressed ? 'translate(5px, 5px)' : '',
    boxShadow: pressed ? '' : '5px 5px 0px 0px #E1EEFF',
    opacity,
  };
}
