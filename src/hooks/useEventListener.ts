import { useEffect, useRef } from 'react';

type Listener<T> = (event: T) => void;

export function useEventListener<T extends Event>(
  eventName: string,
  listener: Listener<T>
) {
  const savedListener = useRef<Listener<T>>();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  useEffect(() => {
    const eventListener = (event: Event) => {
      if (savedListener.current) {
        savedListener.current(event as T);
      }
    };

    window.addEventListener(eventName, eventListener);

    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  }, [eventName]);
}
