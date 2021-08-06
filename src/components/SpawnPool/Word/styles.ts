import { useMemo } from 'react';
import { CSSProperties } from 'react';
import { getRandomElement } from 'src/utils';
import { FONTS, PALETTE } from 'src/constants';

function getTransform(x: number, y: number, parentRect: DOMRect) {
  const inRightHalf = x > parentRect.width / 2;
  const inBottomHalf = y > parentRect.height / 2;
  const transforms: string[] = [];

  if (inRightHalf) {
    transforms.push('translateX(-100%)');
  }
  if (inBottomHalf) {
    transforms.push('translateY(-100%)');
  }

  return transforms.join(' ');
}

export function useStyle(
  opacity: number,
  complexity: number,
  parentRect: DOMRect
): CSSProperties {
  const { width, height } = parentRect;
  const x = useMemo(() => Math.random() * width, [width]);
  const y = useMemo(() => Math.random() * height, [height]);
  const fontFamily = useMemo(() => getRandomElement(FONTS), []);
  const color = useMemo(() => getRandomElement(PALETTE), []);

  return {
    position: 'absolute',
    transition: 'all linear 2s',
    left: x,
    top: y,
    opacity,
    transform: getTransform(x, y, parentRect),
    fontSize: 10 + complexity * 3,
    fontFamily,
    color,
  };
}
