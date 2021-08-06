import { useCallback, useState } from 'react';

type InitialValue<T> = T | (() => T);
type SetterValue<T> = T | ((prev: T) => T);

function isFunction(valueOrFunction: any) {
  return typeof valueOrFunction === 'function';
}

function getInitialValue<T>(valueOrFunction: InitialValue<T>): T {
  if (isFunction(valueOrFunction)) {
    const func = valueOrFunction as () => T;
    return func();
  }
  return valueOrFunction as T;
}

function getNewValue<T>(valueOrFunction: SetterValue<T>, prevValue: T): T {
  if (isFunction(valueOrFunction)) {
    const func = valueOrFunction as (prev: T) => T;
    return func(prevValue);
  }
  return valueOrFunction as T;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: InitialValue<T>
): [T, (newValue: SetterValue<T>) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      const evaluated = getInitialValue(initialValue);
      window.localStorage.setItem(key, JSON.stringify(evaluated));
      return evaluated;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (newValue: SetterValue<T>) => {
      try {
        const evaluated = getNewValue(newValue, storedValue);
        window.localStorage.setItem(key, JSON.stringify(evaluated));
        setStoredValue(evaluated);
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}
