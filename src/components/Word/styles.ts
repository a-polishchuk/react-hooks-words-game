import { CSSProperties } from 'react';

export function getStyle(
  x: number,
  y: number,
  opacity: number,
  rect?: DOMRect
): CSSProperties {
  const inRightHalf = rect && x > rect.width / 2;
  const inBottomHalf = rect && y > rect.height / 2;
  const transforms: string[] = [];

  if (inRightHalf) {
    transforms.push('translateX(-100%)');
  }
  if (inBottomHalf) {
    transforms.push('translateY(-100%)');
  }

  return {
    position: 'absolute',
    fontSize: 14,
    transition: 'all linear 2s',
    left: x,
    top: y,
    opacity,
    transform: transforms.join(' '),
  };
}
