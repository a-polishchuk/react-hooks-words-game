import { RefObject, useCallback, useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export function useElementRect(elementRef: RefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    setRect(getRect(elementRef));
  }, [elementRef]);

  useEventListener(
    'resize',
    useCallback(() => {
      setRect(getRect(elementRef));
    }, [elementRef])
  );

  return rect;
}

function getRect(elementRef: RefObject<HTMLElement>) {
  return elementRef.current?.getBoundingClientRect();
}
