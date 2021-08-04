import {
  ReactNode,
  Dispatch,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { reducer } from 'src/reducer';
import { State, INITIAL_STATE, Action } from 'src/types';

const defaultValue: any = null;
const GameContext = createContext<[State, Dispatch<Action>]>(defaultValue);

export function useGameContext() {
  return useContext(GameContext);
}

export function GameContextProvider({ children }: { children: ReactNode }) {
  const value = useReducer(reducer, INITIAL_STATE);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
