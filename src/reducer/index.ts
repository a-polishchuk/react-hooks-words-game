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
    case ActionType.PLAY:
      return {
        ...state,
        gameStatus: GameStatus.PLAYING,
        playTime: Date.now(),
      };
    case ActionType.PAUSE:
      const timePassed = Date.now() - state.playTime;
      return {
        ...state,
        gameStatus: GameStatus.PAUSED,
        timeLeft: state.timeLeft - timePassed,
      };
    case ActionType.GAME_OVER:
      return {
        ...state,
        gameStatus: GameStatus.FINISHED,
        timeLeft: 0,
      };
    case ActionType.PLAY_AGAIN:
      return {
        ...INITIAL_STATE,
        gameStatus: GameStatus.PLAYING,
        playTime: Date.now(),
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
