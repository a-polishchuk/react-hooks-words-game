import { useCallback, useEffect, useState, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);
  const [intervalId, setIntervalId] = useState<number | null>();
  const [trigger, setTrigger] = useState<{}>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const id: any = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [delay, trigger]);

  const isRunning = !!intervalId;

  const stop = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const restart = useCallback(() => {
    setTrigger({});
  }, []);

  return { isRunning, stop, restart };
}
