import { CSSProperties } from 'react';

export interface Styles {
  [key: string]: CSSProperties;
}

export interface WordData {
  id: string;
  word: string;
  timeToLive: number;
  complexity: number;
}

export interface IncomingWordResult {
  partOfSpeech: string;
  definition: string;
  examples?: string[];
  synonyms?: string[];
}

export interface IncomingWord {
  word: string;
  results: IncomingWordResult[];
}

export enum GameStatus {
  IDLE = 'idle',
  PLAYING = 'playing',
  PAUSED = 'paused',
  FINISHED = 'finsihed',
}

export interface State {
  gameStatus: GameStatus;
  words: WordData[];
  score: number;
  lastWord: string;
  lastPoints: number;
}

export const INITIAL_STATE: State = {
  gameStatus: GameStatus.IDLE,
  words: [],
  score: 0,
  lastWord: '',
  lastPoints: 0,
};

export enum ActionType {
  SET_GAME_STATUS = 'set_game_status',
  PLAY_AGAIN = 'play_again',
  ADD_WORD = 'add_word',
  SUBMIT_WORD = 'submit_word',
  EXPIRE_WORD = 'expire_word',
}

export interface Action {
  type: ActionType;
  payload?: any;
}
