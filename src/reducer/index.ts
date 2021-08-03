import {
  Action,
  ActionType,
  GameStatus,
  State,
  INITIAL_STATE,
} from 'src/types';
import { submitWord } from './submitWord';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.payload,
      };
    case ActionType.PLAY_AGAIN:
      return {
        ...INITIAL_STATE,
        gameStatus: GameStatus.PLAYING,
      };
    case ActionType.ADD_WORD:
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    case ActionType.EXPIRE_WORD:
      return {
        ...state,
        words: state.words.filter((w) => w.id !== action.payload),
      };
    case ActionType.SUBMIT_WORD:
      return submitWord(state, action);
    default:
      return state;
  }
}
