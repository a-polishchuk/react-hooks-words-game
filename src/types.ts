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
