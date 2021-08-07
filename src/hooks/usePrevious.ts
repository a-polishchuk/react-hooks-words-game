import { useEffect, useState, Dispatch, SetStateAction } from 'react';

export function usePrevious<T>(value: T): [T, Dispatch<SetStateAction<T>>] {
  const [prevValue, setPrevValue] = useState<T>(value);
  const [currentValue, setCurrentValue] = useState<T>(value);

  useEffect(() => {
    if (value !== currentValue) {
      setPrevValue(currentValue);
      setCurrentValue(value);
    }
  }, [currentValue, value]);

  return [prevValue, setPrevValue];
}
