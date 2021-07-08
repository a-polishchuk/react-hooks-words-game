import { RefObject, useEffect, useState } from 'react';

export function useElementRect(elementRef: RefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      setRect(element.getBoundingClientRect());
    }
  }, [elementRef]);

  return rect;
}
