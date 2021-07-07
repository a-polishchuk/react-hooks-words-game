import { CSSProperties } from 'react';

export interface Styles {
  [key: string]: CSSProperties;
}

export interface WordData {
  id: string;
  word: string;
  left: number;
  top: number;
  timeToLive: number;
}
